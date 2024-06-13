import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.css']
})
export class ViewteacherComponent implements OnInit {

// ....show table on UI.........
allteacherdata:any;

constructor( private myservice:SchoolService,private router:Router) { 

  this.myservice.getallteacher().subscribe((x)=>{
    this.allteacherdata=x
  });

  // ....end...


  

}

  ngOnInit(): void {
  }

}
