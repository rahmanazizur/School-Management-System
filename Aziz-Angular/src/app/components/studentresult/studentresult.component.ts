import lodash from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Addstudent } from 'src/app/models/addstudent';
import { Resultinfo } from 'src/app/models/resultinfo';
import { StudentResultInfoDTO } from 'src/app/models/studentresultinfodto';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-studentresult',
  templateUrl: './studentresult.component.html',
  styleUrls: ['./studentresult.component.css']
})
export class StudentresultComponent implements OnInit {

  constructor( private schoolService:SchoolService) { }

  student_id:any;
  class1:any;
  section:any;
  subjectwise_result:any;
  pass_fail:any;
  total_marks:any;
  examTitle: any;

  allSubjectList:string [] =[];
  classList: string[] = [];
  sectionList: string[] = [];
  originalStudentResultInfoList: StudentResultInfoDTO[] = [];
  studentResultInfoList: StudentResultInfoDTO[] = [];
  allExamTitleList:string[] = [];
  enableSaveButton: boolean = false;

  ngOnInit(): void {
    this.classList = this.schoolService.getClassList();
    this.sectionList = this.schoolService.getAllSectionList(this.class1);
    this.getExamNames();
    this.getStudentResultInfoList();
  }

  selectedClassChanged() {
    this.sectionList = this.schoolService.getAllSectionList(this.class1);
    this.section = this.sectionList[0];
    this.selectedSectionChanged();
  }

  selectedSectionChanged() {
    this.getStudentResultInfoList();
  }

  
  getSubjectList() {
    return this.schoolService.getSubjectByClasswise(this.class1, this.section);
  }

  getExamNames() {
    this.schoolService.getExamSchedule().subscribe(res => {
      if (res) {
        this.allExamTitleList = [...new Set(res.map(exam => exam.examTitle))];
      }
    });
  }

  getStudentResultInfoList() {
    if (this.class1 && this.section && this.examTitle) {
      let params: Resultinfo =  {
        "class1": this.class1,
        "section": this.section,
        "exam_title": this.examTitle
      };
      this.schoolService.getStudentResultInfoList(params).subscribe(res => {
        this.studentResultInfoList = lodash.cloneDeep(res);
        this.getSubjectwiseMarks();
        this.originalStudentResultInfoList = lodash.cloneDeep(this.studentResultInfoList);
      });
    } else {
      this.originalStudentResultInfoList = [];
      this.studentResultInfoList = [];
    }
  }

  getSubjectwiseMarks() {
    if (this.studentResultInfoList) {
      this.allSubjectList = this.getSubjectList();
      for (let idx = 0; idx < this.studentResultInfoList.length; idx++) {
        let resultInfo = this.studentResultInfoList[idx];
        this.initializeSubjectwiseResultMap(resultInfo);
        if (resultInfo.subjectwise_result) {
          let subjectwise_result_json = JSON.parse(resultInfo.subjectwise_result);
          console.log(subjectwise_result_json);
          for (let subject of Object.keys(subjectwise_result_json)) {
            let marks = subjectwise_result_json[subject];
            resultInfo.subjectwise_result_map.set(subject, marks);
          }
        }
      }
    }
  }

  initializeSubjectwiseResultMap(resultInfo: StudentResultInfoDTO) {
    resultInfo.subjectwise_result_map = new Map<string, any>();
    for (let subject of this.allSubjectList) {
      resultInfo.subjectwise_result_map.set(subject, null);
    }
  }

  isFailMarks(marks: any) {
    if ((marks != null || marks != undefined) && marks < 33) return true;
    return false;
  }

  updateMarks(event: any, subject: string, studentResult: StudentResultInfoDTO) {
    let resultInfo = this.studentResultInfoList.find(student => student.student_id == studentResult.student_id);
    
    if (resultInfo) {
      let marks = parseInt(event.target.value);
      if (marks > 100) {
        marks = 100;
      }
      resultInfo.subjectwise_result_map.set(subject, marks);
      this.calculateTotalMarksAndGrade(resultInfo);
      resultInfo.exam_title = this.examTitle;
      resultInfo.isEdited = true;
    }
    this.enableSaveButton = true;

  }

  calculateTotalMarksAndGrade(resultInfo: StudentResultInfoDTO) {
    let totalMarks = 0;
    let isPassed = true;
    let grade: any = 0;
    resultInfo.subjectwise_result_map.forEach((marks:number) => {
      if (marks < 33) {
        isPassed = false;
      }
      grade = grade + this.calculateGrade(marks);
      totalMarks = totalMarks + marks;
    });
    resultInfo.total_marks = totalMarks;
    if (isPassed == true) {
      resultInfo.grade = Number(grade / this.allSubjectList.length).toFixed(2)
      resultInfo.pass_fail = 'PASS';
    } else {
      resultInfo.grade = 0;
      resultInfo.pass_fail = 'FAIL';
    }
  }

  calculateGrade(marks: number) {
    if (marks < 33) return 0.0;
    else if (marks >= 33 && marks <= 39) return 1.0;
    else if (marks >= 40 && marks <= 49) return 2.0;
    else if (marks >= 50 && marks <= 59) return 3.0;
    else if (marks >= 60 && marks <= 69) return 3.5;
    else if (marks >= 70 && marks <= 79) return 4.0;
    return 5.0;
  }

  cancelChanges() {
    this.enableSaveButton = false;
    this.studentResultInfoList = lodash.cloneDeep(this.originalStudentResultInfoList);
  }

  saveResult() {
    let resultInfoListToSave: StudentResultInfoDTO[] = [];
    for (let idx = 0; idx < this.studentResultInfoList.length; idx++) {
      let studentResult = this.studentResultInfoList[idx];
      this.prepareSubjectwiseMarksString(studentResult);
      if (studentResult.isEdited) {
        resultInfoListToSave.push(studentResult);
      }
    }

    this.schoolService.saveStudentResult(resultInfoListToSave).subscribe(() => {
      alert("save data Succeessfully");
      this.getStudentResultInfoList();
    });
    this.enableSaveButton = false;

  }

  prepareSubjectwiseMarksString(studentResult: StudentResultInfoDTO) {
    let subjectwiseMarksObject = Object.fromEntries(studentResult.subjectwise_result_map);
    let subjectwiseMarksString = JSON.stringify(subjectwiseMarksObject);
    studentResult.subjectwise_result = subjectwiseMarksString;
  }

}
