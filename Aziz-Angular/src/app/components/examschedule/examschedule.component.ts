import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Examschedule } from 'src/app/models/examschedule';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-examschedule',
  templateUrl: './examschedule.component.html',
  styleUrls: ['./examschedule.component.css']
})
export class ExamscheduleComponent implements OnInit {


examTitle:any;
class1:any;
subject:any;
examType:any;
examHall:any;
examDate:any;
examStart:any;
examEnd:any;
examInvigilator:any;

examScheduleData:any;
allTeacherNameList:any;
subjectList: string[] = [];
selectedSection: any;

  constructor( private mySchoolService:SchoolService, private router:Router) { }

  ngOnInit(): void {
    this.getAllTeachersName();
  }
  examSchedule(){
  this.examScheduleData = new Examschedule(this.examTitle,this.class1, this.subject,this.examType,
  this.examHall,this.examDate,this.examStart,
  this.examEnd,
  this.examInvigilator
  );

  this.mySchoolService.examSchedule(this.examScheduleData).subscribe(res=>{
      alert("save data Succeessfully");
    // this.router.navigateByUrl("viewstudent", { state: { response: this.examScheduleData } });


   
   });
   


  }

  
  getAllTeachersName(){

    this.mySchoolService.getallteacher().subscribe((result)=>{

      this.allTeacherNameList = result.map(teacher => teacher.name )

    } )

  }

  getSubjectList() {
    this.subjectList = this.mySchoolService.getSubjectByClasswise(this.class1, this.selectedSection);
  }


}
