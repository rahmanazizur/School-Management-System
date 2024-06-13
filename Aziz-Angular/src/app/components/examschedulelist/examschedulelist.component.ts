import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-examschedulelist',
  templateUrl: './examschedulelist.component.html',
  styleUrls: ['./examschedulelist.component.css']
})
export class ExamschedulelistComponent implements OnInit {
  examscheduleData:any; 

  constructor( private mySchoolService:SchoolService, private router:Router ) {


    this.mySchoolService.getExamSchedule().subscribe((x)=>{
      this.examscheduleData=x
    });

   }


  ngOnInit(): void {
  }



}
