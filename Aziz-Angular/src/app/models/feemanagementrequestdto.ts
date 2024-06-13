export class FeeManagementRequestDTO {
    fee_name?:any;
    fee_amount?:any;
    classNames?:any[];
    start_date?:any;
    end_date?:any;
    monthName?:any;
    className?:any;
    paymentStatus?:any;
    studentId?:any;
    paymentMethod?:any;
    paymentDate?:any;

    constructor(fee_name:any, fee_amount:any, classNames:any, start_date:any, end_date:any, monthName:any,className?:any,
            paymentStatus?:any, studentId?:any, paymentMethod?:any, paymentDate?:any) {
        this.fee_name = fee_name;
        this.fee_amount = fee_amount;
        this.classNames = classNames;
        this.start_date = start_date;
        this.end_date = end_date;
        this.monthName = monthName;
        this.className = className;
        this.paymentStatus = paymentStatus;
        this.studentId = studentId;
        this.paymentMethod = paymentMethod;
        this.paymentDate = paymentDate;
        
    }
}