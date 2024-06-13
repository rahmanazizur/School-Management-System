import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLASS_NAME, SECTION_NAME } from 'src/app/common/enums';
import { Addstudent } from 'src/app/models/addstudent';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myservice:SchoolService,private router:Router) { }

  student_id:any;
  full_name:any;

  dob:any;
  email:any;
  mob:any;
  gender:any;
  class1:any;
  subject:any;
  present_addres:any;
  permanent_address:any;
  session:any;
  status:any;
  section:any;

  allstudent:any;
  sectionOptionList:string[] = [];


  ngOnInit(): void {
  }

  addstudent(){

    this.allstudent =new Addstudent( this.student_id,this.full_name,this.dob,this.email,this.mob,this.gender,this.class1,this.subject,this.present_addres,this.permanent_address,this.session,this.status,this.section);

  

    this.myservice.addstudentbyadmin(this.allstudent).subscribe(()=>{
     alert("save data Succeessfully");
     this.router.navigateByUrl("viewstudent", { state: { response: this.allstudent } });
    
    });
  }

  
  classValueChange(){
      this.sectionOptionList = this.myservice.getAllSectionList(this.class1);
  }

}
