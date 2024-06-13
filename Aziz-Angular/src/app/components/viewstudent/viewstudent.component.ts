import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
// ....show table on UI.........
  allstudentdata:any;

  constructor( private myservice:SchoolService,private router:Router) { 

    this.myservice.getallstudent().subscribe((x)=>{
      this.allstudentdata=x
    });

    // ....end...

    // .......update table step-1 start.....
    this.allstudentdata = this.router.getCurrentNavigation()?.extras.state?.["response"];
    

  }

  data:any;
  search(v: any) {
   

    this.myservice.search(v).subscribe((x) => {
      this.data = x;
      this.router.navigateByUrl("update", { state: { response: this.data } });
    });
  }
  // .......update table step-1 end.....


  ngOnInit(): void {
  }
// ...........delete part step-1 start........

  delete(v: any) {
   
    if (confirm("are you sure to delete")){
      console.log(
        this.myservice.delete(v).subscribe(()=>{
          this.myservice.getallstudent().subscribe((x)=>{
            this.allstudentdata=x
            this.router.navigateByUrl("/viewstudent", { state: { response: this.allstudentdata } })
          });
        })
      )
    }
    
  
    }
// ...........delete part step-1 end........

    
}

