import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
