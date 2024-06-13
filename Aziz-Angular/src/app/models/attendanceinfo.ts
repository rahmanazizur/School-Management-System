export class Attendanceinfo {

    attendanceId:any;
    studentId: any;
    studentName: any;
    class1: any;
    section: any; 
    attendanceDate: any;
    attendanceStatus: any;


    constructor(studentId: any, studentName: any, class1: any, 
        section: any, attendanceDate: any, attendanceStatus: any) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.class1 = class1;
        this.section = section;
        this.attendanceDate = attendanceDate;
        this.attendanceStatus = attendanceStatus;
    }

}

