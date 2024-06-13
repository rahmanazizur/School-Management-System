import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacherpage',
  templateUrl: './teacherpage.component.html',
  styleUrls: ['./teacherpage.component.css']
})
export class TeacherpageComponent implements OnInit {

  teacheruser:any;
  constructor(private router:Router, private route:ActivatedRoute) { 

    this.teacheruser=this.router.getCurrentNavigation()?.extras.state?.['response'];

  }

  ngOnInit(): void {
  }


}
