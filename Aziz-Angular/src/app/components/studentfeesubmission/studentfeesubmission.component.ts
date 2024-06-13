import lodash from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FeeManagementRequestDTO } from 'src/app/models/feemanagementrequestdto';
import { FeePaymentDTO } from 'src/app/models/feepaymentdto';
import { SchoolService } from 'src/app/services/school.service';
import { formatDateToMMDDYYYY, isNullOrEmpty } from 'src/app/services/utils.service';
import { Addstudent } from 'src/app/models/addstudent';
declare var $: any;

@Component({
  selector: 'app-studentfeesubmission',
  templateUrl: './studentfeesubmission.component.html',
  styleUrls: ['./studentfeesubmission.component.css']
})
export class StudentfeesubmissionComponent implements OnInit {

  queryMonthName:any;
  queryYearName:any;
  allFeeNameList:string[]=[];
  monthNameList:string[]=[];
  lastFiveYears:string[]=[];
  classNameList:string[]=[];
  feePaymentList:FeePaymentDTO[] = [];
  queryObject: FeeManagementRequestDTO = {};
  paymentStatusList:string[]=[];
  feePaymentModalObj: FeePaymentDTO = {};
  dataModified:boolean = false;
  currentStuent: Addstudent = {} as Addstudent;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.currentStuent = this.schoolService.getCurrentStudent();
    this.allFeeNameList = ["Monthly Fee", "Registration Fee", "Addmission Fee", "Exam Fee"];
    this.classNameList = this.schoolService.getClassList();
    this.paymentStatusList = ["", "Due", "Pending", "Approved"];
    this.monthNameList = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.lastFiveYears = this.getLastFiveYears();  
    this.queryForFeeRecords();
  }

  getLastFiveYears() {
    let currentYear = new Date().getFullYear();
    let years = [];
    for (let i = currentYear - 5; i <= currentYear; i++) {  
      years.push(i + "");
    }

    return years;
  }

  
  feeNameChanged() {
    if (this.queryObject.fee_name == 'Monthly Fee') {
      const date = new Date();
      this.queryMonthName = date.toLocaleString('default', { month: 'long' });
      this.queryYearName = date.getFullYear();
    }
  }

  queryForFeeRecords() {
    this.dataModified = false;  
    if (this.queryObject.fee_name == 'Monthly Fee') {
      this.queryObject.monthName = this.queryMonthName + ' - ' + this.queryYearName;
    }
    let params: FeeManagementRequestDTO = lodash.cloneDeep(this.queryObject);
    if (params.paymentStatus == 'Due') {
      params.paymentStatus = null;
    }
    params.studentId = this.currentStuent.student_id;
    this.schoolService.getFeeManagementRecords(params).subscribe(res => {
      if (this.queryObject.paymentStatus == 'Due') {
        res = res.filter(item => {
          return (isNullOrEmpty(item.payment_status));
        });
      }
      this.feePaymentList = res;
      this.feePaymentList.forEach(item => {
        if (isNullOrEmpty(item.payment_status)) {
          item.payment_status = 'Due';
        }
      })
    });
  }

  clearQuery() {
    this.queryObject = {};
  }


  modalDataModified() {
      this.dataModified = true;
  }

  showModal(selector: string) {
    ($(selector as any) as any).modal('show');
  }

  hideModal(selector: string) {
    ($(selector as any) as any).modal('hide');
  }

  showSubmitPaymentModal(feePayment:FeePaymentDTO, selector: string) {
    if (feePayment.payment_status == 'Approved') {
      return;
    }
    this.showModal(selector);
    this.feePaymentModalObj = lodash.cloneDeep(feePayment);
    this.feePaymentModalObj.payment_method = 'Bank Transfer';
    this.feePaymentModalObj.payment_status = 'Pending';
    
    this.feePaymentModalObj.payment_amount = feePayment.fee_amount;
    this.feePaymentModalObj.payment_date = formatDateToMMDDYYYY(new Date());
  }

  submitPayment(selector: string) {
    if (!this.validateAllFieldsPopulated()) {
      alert('Please enter value in all the fields for payment');
      return;
    }
    
    // let feePayListToUpdate:FeePaymentDTO[] = [];
    // feePayListToUpdate.push(this.feePaymentModalObj);
    this.schoolService.submitPayment(this.feePaymentModalObj).subscribe(() => {
      this.hideModal(selector);
      this.queryForFeeRecords();
    });
  }

  validateAllFieldsPopulated() {
    if (!isNullOrEmpty(this.feePaymentModalObj.transaction_id) && !isNullOrEmpty(this.feePaymentModalObj.bankName)  
      && !isNullOrEmpty(this.feePaymentModalObj.accountNumber) && !isNullOrEmpty(this.feePaymentModalObj.accountName)) {
        return true;
    }
    return false;
  }


}
