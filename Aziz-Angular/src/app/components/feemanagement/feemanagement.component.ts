import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLASS_NAME } from 'src/app/common/enums';
import { FeeManagementRequestDTO } from 'src/app/models/feemanagementrequestdto';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-feemanagement',
  templateUrl: './feemanagement.component.html',
  styleUrls: ['./feemanagement.component.css']
})
export class FeemanagementComponent implements OnInit {
  feeName:any;
  monthName:any;
  class1:any;
  feeAmount:any;
  startDate:any;
  endDate:any;
  applied_to_one:any;
  applied_to_two:any;
  applied_to_three:any;
  applied_to_four:any;
  applied_to_five:any;
  applied_to_six:any;
  applied_to_seven:any;
  applied_to_eight:any;
  applied_to_nine:any;
  applied_to_ten:any;
  allFeeNameList:string[]=[];
  monthNameList:string[]=[];


  constructor(private schoolService: SchoolService, private router:Router) { }

  ngOnInit(): void {
    this.allFeeNameList = ["Monthly Fee", "Registration Fee", "Addmission Fee", "Exam Fee"];
    this.monthNameList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
  }

  feeNameChanged() {
    if (this.feeName != 'Monthly Fee') {
      this.monthName = null;
    }
  }

  checkForSave() {
    if (this.startDate > this.endDate){
      alert('End Date of fee submission can not be earlier than Start Date');
      return;
    }
    this.saveFeeDetail();
  }

  prepareClassList() {
    let classNames = [];
    if (this.applied_to_one) {
      classNames.push(CLASS_NAME.ONE);
    }
    if (this.applied_to_two) {
      classNames.push(CLASS_NAME.TWO);
    }
    if (this.applied_to_three) {
      classNames.push(CLASS_NAME.THREE);
    }
    if (this.applied_to_four) {
      classNames.push(CLASS_NAME.FOUR);
    }
    if (this.applied_to_five) {
      classNames.push(CLASS_NAME.FIVE);
    }
    if (this.applied_to_six) {
      classNames.push(CLASS_NAME.SIX);
    }
    if (this.applied_to_seven) {
      classNames.push(CLASS_NAME.SEVEN);
    }
    if (this.applied_to_eight) {
      classNames.push(CLASS_NAME.EIGHT);
    }
    if (this.applied_to_nine) {
      classNames.push(CLASS_NAME.NINE);
    }
    if (this.applied_to_ten) {
      classNames.push(CLASS_NAME.TEN);
    }
    return classNames;
  }

  saveFeeDetail() {
    let classNameList = this.prepareClassList();
    if (classNameList.length < 1) {
      alert('Atleast one Class has to be checked');
      return;
    }
    let currentYear = new Date().getFullYear();
    let params = new FeeManagementRequestDTO(this.feeName, this.feeAmount, classNameList, this.startDate, this.endDate, this.monthName + " - " + currentYear);
    this.schoolService.saveFeeManagementDetail(params).subscribe(() => {
      alert('Data Saved Successfully');
      this.clearAll();
      this.navigateToViewFeeRecords();
    });

  }

  clearAll() {
    this.feeName = null;
    this.class1 = null;
    this.feeAmount = null;
    this.startDate = null;
    this.endDate = null;
    this.applied_to_one = null;
    this.applied_to_two = null;
    this.applied_to_three = null;
    this.applied_to_four = null;
    this.applied_to_five = null;
    this.applied_to_six = null;
    this.applied_to_seven = null;
    this.applied_to_eight = null;
    this.applied_to_nine = null;
    this.applied_to_ten = null;
    this.monthName = null;
  }

  navigateToViewFeeRecords() {
    this.router.navigateByUrl("viewfeerecords", { state: {} });
  }

}
