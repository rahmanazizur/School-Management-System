import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-newapplicants',
  templateUrl: './newapplicants.component.html',
  styleUrls: ['./newapplicants.component.css']
})
export class NewapplicantsComponent implements OnInit {


  // ....show table on UI.........
  getnewApplicants:any;

  constructor( private myservice:SchoolService,private router:Router) { 

    this.myservice.getnewApplicants().subscribe((x)=>{
      this.getnewApplicants=x
    });

    // ....end...
     // .......update table step-1 start.....
     this.getnewApplicants = this.router.getCurrentNavigation()?.extras.state?.["response"];
    
  }

  data:any;
  searchapproval(v: any) {
   

    this.myservice.searchapproval(v).subscribe((x) => {
      this.data = x;
      this.router.navigateByUrl("approvalstudent", { state: { response: this.data } });
    });
  }
  // .......update table step-1 end.....

  
  ngOnInit(): void {
  }
  // ...........delete part step-1 start........

  reject(v: any) {
   
    if (confirm("are you sure to delete")){
      console.log(
        this.myservice.reject(v).subscribe(()=>{
          this.myservice.getallstudent().subscribe((x)=>{
            this.getnewApplicants=x
            this.router.navigateByUrl("newapplicants", { state: { response: this.getnewApplicants } })
          });
        })
      )
    }
    
  
    }
// ...........delete part step-1 end........


}
