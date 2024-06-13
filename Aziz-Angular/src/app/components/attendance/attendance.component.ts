import { Component, OnInit } from '@angular/core';
import { Addstudent } from 'src/app/models/addstudent';
import { Attendanceinfo } from 'src/app/models/attendanceinfo';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  studentId:any;
  studentName: any;
  class1: any;
  selectedSection: any;
  section: any;
  allStudentList: Addstudent[] = [];
  selectedStudentInfo: any = {};
  attendanceDate: any;
  attendanceInfo: any;
  attendanceStatus:any;

  

  constructor(private schoolService: SchoolService) {

   

   }

  ngOnInit(): void {
    this.getAllStudent();
  }

  takeAttendance() {
    this.attendanceInfo = new Attendanceinfo(this.studentId,this.selectedStudentInfo.full_name,
      this.selectedStudentInfo.class1,
      this.selectedStudentInfo.section,
      this.attendanceDate,this.attendanceStatus);
    
      this.schoolService.takeAttendance(this.attendanceInfo).subscribe(res=>{
          alert("save data Succeessfully");
       });
       
  }

  getAllStudent() {
    this.schoolService.getallstudent().subscribe(res => {
      this.allStudentList = res;
    }); 
  }

  studentIdChanged() {
    this.selectedStudentInfo = this.allStudentList.find(student => student.student_id == parseInt(this.studentId));
    if (!this.selectedStudentInfo) {
      this.selectedStudentInfo = {};
    }
  }

}
