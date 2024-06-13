import lodash from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Resultinfo } from 'src/app/models/resultinfo';
import { StudentResultInfoDTO } from 'src/app/models/studentresultinfodto';
import { SchoolService } from 'src/app/services/school.service';
import { Addstudent } from 'src/app/models/addstudent';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {

  constructor( private schoolService:SchoolService) { }

  student_id:any;
  class1:any;
  section:any;
  subjectwise_result:any;
  pass_fail:any;
  total_marks:any;
  examTitle: any;
  currentStudent:Addstudent = {} as Addstudent;
  allSubjectList:string [] =[];
  classList: string[] = [];
  sectionList: string[] = [];
  originalStudentResultInfoList: StudentResultInfoDTO[] = [];
  studentResultInfoList: StudentResultInfoDTO[] = [];
  allExamTitleList:string[] = [];

  ngOnInit(): void {
    this.currentStudent = this.schoolService.getCurrentStudent();
    this.getExamNames();
    this.getStudentResultInfoList();
  }

  
  getSubjectList() {
    return this.schoolService.getSubjectByClasswise(this.currentStudent.class1, this.currentStudent.section);
  }

  getExamNames() {
    this.schoolService.getExamSchedule().subscribe(res => {
      if (res) {
        this.allExamTitleList = [...new Set(res.map(exam => exam.examTitle))];
      }
    });
  }

  getStudentResultInfoList() {
    if (this.examTitle) {
      let params: Resultinfo =  {
        "student_id": this.currentStudent.student_id,
        "exam_title": this.examTitle
      };
      this.schoolService.getStudentResultInfoListByStuentId(params).subscribe(res => {
        this.studentResultInfoList = lodash.cloneDeep(res);
        this.getSubjectwiseMarks();
        this.originalStudentResultInfoList = lodash.cloneDeep(this.studentResultInfoList);
      });
    } else {
      this.studentResultInfoList = [];
      this.originalStudentResultInfoList = [];
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

}
