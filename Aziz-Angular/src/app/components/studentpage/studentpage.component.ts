import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentpage',
  templateUrl: './studentpage.component.html',
  styleUrls: ['./studentpage.component.css']
})
export class StudentpageComponent implements OnInit {

  studentuser:any;
  constructor(private router:Router, private route:ActivatedRoute) { 

    this.studentuser=this.router.getCurrentNavigation()?.extras.state?.['response'];

  }

  ngOnInit(): void {
  }


}
