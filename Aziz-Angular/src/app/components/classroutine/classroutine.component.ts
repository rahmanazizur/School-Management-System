import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLASS_NAME, SECTION_NAME } from 'src/app/common/enums';
import { Classroutine } from 'src/app/models/classroutine';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-classroutine',
  templateUrl: './classroutine.component.html',
  styleUrls: ['./classroutine.component.css']
})
export class ClassroutineComponent implements OnInit {

day:any;
class1:any;
section:any;
subject:any;
start_time:any;
end_time:any;
teacher:any;
room_no:any;

classroutine:any

sectionOptionList:string[] = [];
allTeacherNameList:string []=[];
allSubjectList:string[]=[];

  constructor( private schoolService:SchoolService, private router:Router) { }


  ngOnInit(): void {

    this.getAllTeachersName();
    this.getSubjectList();

  }

  saveClassRoutine(){

    this.classroutine=new Classroutine(this.day,this.class1,this.section,this.subject,this.start_time,this.end_time,this.teacher,this.room_no);

    this.schoolService.saveClassRoutine(this.classroutine).subscribe(()=>{
      alert("Class Routine Added Successfully");
      this.router.navigateByUrl("classtimetable", { state: { response: this.classroutine } });
 
     
     });
    

  }

  classValueChange(){
    this.sectionOptionList = this.schoolService.getAllSectionList(this.class1);
    this.getSubjectList();
  }


  getAllTeachersName(){

    this.schoolService.getallteacher().subscribe((result)=>{

      this.allTeacherNameList = result.map(teacher => teacher.name )

    } )

  }

  getSubjectList() {
    this.allSubjectList = this.schoolService.getSubjectByClasswise(this.class1, this.section);
  }


}
