import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addteacher } from 'src/app/models/addteacher';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  id:any;
  name:any;
  email:any;
  password:any;
  qualification:any;
  mob:any;
  role:any;
  status:any;
  joining_date:any;
 
  allteacher:any;
  constructor(private myservice:SchoolService,private router:Router) { }

  ngOnInit(): void {
    
  }

  addteacher(){

    this.allteacher =new Addteacher( this.id,this.name, this.email, this.password,this.qualification,
      this.mob,
      this.role,
      this.status,
      this.joining_date
      );


      
    this.myservice.addteacherByadmin(this.allteacher).subscribe(()=>{
      alert("save data Succeessfully");
      this.router.navigateByUrl("viewteacher", { state: { response: this.allteacher } });
 
 
     
     });
     

  

   
    


  }

}
