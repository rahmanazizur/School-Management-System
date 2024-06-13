import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLASS_NAME, SECTION_NAME } from 'src/app/common/enums';
import { Onlineadmission } from 'src/app/models/onlineadmission';
import { SchoolService } from 'src/app/services/school.service';
import { isNullOrEmpty } from 'src/app/services/utils.service';

@Component({
  selector: 'app-onlineadmission',
  templateUrl: './onlineadmission.component.html',
  styleUrls: ['./onlineadmission.component.css']
})
export class OnlineadmissionComponent implements OnInit {


  full_name:any;
 
  dob:any;
  email:any;
  mob:any;
  gender:any;
  fathername:any;
  mothername:any;
  class1:any;
  present_address:any;
  permanent_address:any;
  session:any;
  section:any;//newly ad
  username:any;
  password:any;
  image:any

  newapplicant:any;
  sectionOptionList:string[]=[];

  constructor(private myservice:SchoolService , private router:Router) { }

  ngOnInit(): void {
  }

  admission(){

   
    this.newapplicant =new Onlineadmission(this.full_name,this.dob,this.email,this.mob,this.gender,this.fathername,
      this.mothername,
      this.class1,
      this.section,
      this.present_address,
      this.permanent_address,
      this.session,
      this.username,
      this.password,
      this.image
    );
  

    this.myservice.admissionSubmit(this.newapplicant).subscribe(res=>{
      if (!isNullOrEmpty(res.responseMessage)) {
        alert(res.responseMessage);
      } else {
        alert("Registration successfully done");
        this.router.navigateByUrl("homepage", { state: { response: this.newapplicant } });
      }

    
    });
    


  }

  classValueChange(){
      this.sectionOptionList = this.myservice.getAllSectionList(this.class1);
  }

}
