import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failpage',
  templateUrl: './failpage.component.html',
  styleUrls: ['./failpage.component.css']
})
export class FailpageComponent implements OnInit {
  warningmessage:any;
  constructor() { }

  ngOnInit(): void {

this.warningmessage="Please Enter correct password";
  }

}
