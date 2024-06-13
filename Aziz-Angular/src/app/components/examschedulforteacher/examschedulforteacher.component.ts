import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-examschedulforteacher',
  templateUrl: './examschedulforteacher.component.html',
  styleUrls: ['./examschedulforteacher.component.css']
})
export class ExamschedulforteacherComponent implements OnInit {
  examscheduleData:any;
  constructor(private mySchoolService:SchoolService, private router:Router) { 


    this.mySchoolService.getExamSchedule().subscribe((x)=>{
      this.examscheduleData=x
    });

  }

  ngOnInit(): void {
  }

}
