import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addstudent } from 'src/app/models/addstudent';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

// ...........update part step-4 start........


  student_id: any;
  full_name: any;

  dob: any;
  email: any;
  mob: any;
  gender: any;
  class1: any;
  subject: any;
  present_addres: any;
  permanent_address: any;
  session: any;
  status: any;
  section:any;

  getData: any;
  sectionOptionList:string[]=[];
  
  constructor(private myservice: SchoolService, private router: Router) {
    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];


    this.student_id = this.getData.student_id;
    this.full_name = this.getData.full_name;
    
    this.dob = this.getData.dob;
    this.email = this.getData.email;
    this.mob = this.getData.mob;
    this.gender = this.getData.gender;
    this.class1 = this.getData.class1;
    this.subject = this.getData.subject;
    this.present_addres = this.getData.present_addres;
    this.permanent_address = this.getData.permanent_address;
    this.session = this.getData.session;
    this.status = this.getData.status;
    this.section = this.getData.section;
  }



  ngOnInit(): void {
  }

  update() {
    this.getData = new Addstudent(this.student_id, this.full_name, this.dob, this.email, this.mob, this.gender, this.class1, this.subject, this.present_addres, this.permanent_address, this.session,this.status,this.section);
    this.myservice.update(this.getData).subscribe(() => {
      this.router.navigateByUrl("viewstudent");
     });
  
  }

  classValueChange(){
    this.sectionOptionList = this.myservice.getAllSectionList(this.class1);
  }
  
}
