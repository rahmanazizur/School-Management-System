import { Component, OnInit } from '@angular/core';
import { FeeManagementRequestDTO } from 'src/app/models/feemanagementrequestdto';
import { FeePaymentDTO } from 'src/app/models/feepaymentdto';
import { SchoolService } from 'src/app/services/school.service';
import { isNullOrEmpty } from 'src/app/services/utils.service';
declare var $: any;


@Component({
  selector: 'app-viewfeerecords',
  templateUrl: './viewfeerecords.component.html',
  styleUrls: ['./viewfeerecords.component.css']
})
export class ViewfeerecordsComponent implements OnInit {

  queryFeeName:any;
  queryMonthName:any;
  queryClass:any;
  queryStartDate:any;
  queryEndDate:any;
  queryStudentId:any;
  queryPaymentStatus:any;
  allFeeNameList:string[]=[];
  monthNameList:string[]=[];
  classNameList:string[]=[];
  feePaymentList:FeePaymentDTO[] = [];
  queryObject: FeeManagementRequestDTO = {};
  paymentStatusList:string[]=[];
  feePaymentModalObj: FeePaymentDTO = {};
  hasAnyPendingStatus:boolean = false;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.allFeeNameList = ["Monthly Fee", "Registration Fee", "Addmission Fee", "Exam Fee"];
    this.classNameList = this.schoolService.getClassList();
    this.paymentStatusList = ["", "Pending", "Approved"];
  }

  queryForFeeRecords() {
    this.schoolService.getFeeManagementRecords(this.queryObject).subscribe(res => {
      this.feePaymentList = res;
      this.hasAnyPendingStatus = this.feePaymentList.filter(item => item.payment_status == 'Pending').length > 0;
    });
  }

  clearQuery() {
    this.queryObject = {};
  }

  showModal(selector: string) {
    ($(selector as any) as any).modal('show');
  }

  hideModal(selector: string) {
    ($(selector as any) as any).modal('hide');
  }

  showPaymentDetailModal(feePayment:FeePaymentDTO, selector: string) {
    this.showModal(selector);
    this.feePaymentModalObj = feePayment;
  }

  changePaymentStatus(newPaymentStatus:string, selector: string) {
    if (newPaymentStatus == 'Rejected' && isNullOrEmpty(this.feePaymentModalObj.paymentRemarks)) {
      alert('Enter the reason of rejection in the Remarks field');
      return;
    }
    this.feePaymentModalObj.payment_status = newPaymentStatus;
    let feePayListToUpdate:FeePaymentDTO[] = [];
    feePayListToUpdate.push(this.feePaymentModalObj);
    this.schoolService.updatePaymentStatus(feePayListToUpdate).subscribe(() => {
      this.hideModal(selector);
      this.queryForFeeRecords();
    });
  }

}
