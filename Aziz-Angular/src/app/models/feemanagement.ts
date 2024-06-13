export class FeeManagement {
    fee_management_id?:any;
	fee_name?:any;
	fee_amount?:any;
	student_id?:any;
	class1?:any;
	start_date?:any;
	end_date?:any;
	payment_record_id?:any;
	monthName?:any;


    constructor(fee_management_id:any, fee_name:any, fee_amount:any, student_id:any, class1:any, 
        start_date:any, end_date:any, payment_record_id:any, monthName:any) {
            this.fee_management_id = fee_management_id;
            this.fee_name = fee_name;
            this.fee_amount = fee_amount;
            this.student_id = student_id;
            this.class1 = class1;
            this.start_date = start_date;
            this.end_date = end_date;
            this.payment_record_id = payment_record_id;
            this.monthName = monthName;
    }

}