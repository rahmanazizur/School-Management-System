import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.css']
})
export class AttendancelistComponent implements OnInit {


  allAttendanceDataList:any;

  constructor( private schoolService:SchoolService, private router:Router) { 

this.schoolService.getAttendance().subscribe((x)=>{

  this.allAttendanceDataList=x;
});



  }

  ngOnInit(): void {
  }

}
