import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
adminuser:any;
  constructor(private router:Router, private route:ActivatedRoute) { 

    this.adminuser=this.router.getCurrentNavigation()?.extras.state?.['response'];

  }

  ngOnInit(): void {
  }

  getdata() {
    this.router.navigateByUrl("viewstudent");
  }


}
