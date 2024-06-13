import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Onlineadmission } from 'src/app/models/onlineadmission';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-approvalstudent',
  templateUrl: './approvalstudent.component.html',
  styleUrls: ['./approvalstudent.component.css']
})
export class ApprovalstudentComponent implements OnInit {


 
  full_name:any;
  dob:any;
  email:any;
  mob:any;
  gender:any;
  fathername:any;
  mothername:any;
  class1:any;
  section:any;
  present_address:any;
  permanent_address:any;
  session:any;
  // section:any;//newly added
  username:any;
  password:any;
  image:any

  sectionOptionList:string[] = [];
  getData:any;


  constructor(private myservice: SchoolService, private router: Router) { 
    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];

    this.full_name=this.getData.full_name;
  this.dob=this.getData.dob;
    this. email=this.getData.email;
    this.mob=this.getData.mob;
    this.gender=this.getData.gender;
    this.fathername=this.getData.fathername;
    this.mothername=this.getData.mothername;
    this.class1=this.getData.class1;
    this.section=this.getData.section;
    this.present_address=this.getData.present_address;
    this.permanent_address=this.getData.permanent_address;
    this.session=this.getData.session;
    this.username=this.getData.username;
    this.password=this.getData.password;
    this.image=this.getData.image;

    this.sectionOptionList = this.myservice.getAllSectionList(this.class1);

  }

  ngOnInit(): void {
  }
// ......Approve newApplicants and send data ............
  senddata:any;
  Approve() {
    this.senddata = new Onlineadmission( this.full_name, this.dob,this.email,this.mob,this.gender,this.fathername,
      this.mothername,
      this.class1,
      this.section,
      this.present_address,
      this.permanent_address,
      this.session,
      this.username,
      this.password,
      this.image);
    this.myservice.Approve(this.senddata).subscribe(() => { });
    alert("Successfully submitted");
    this.router.navigateByUrl("newapplicants");
  }

}
