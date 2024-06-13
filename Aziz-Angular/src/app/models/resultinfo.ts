export class Resultinfo {

     result_id?:any;
	 student_id?:any;
	 class1?:any;
	 section?:any;
	 subjectwise_result?:any;
	 pass_fail?:any;
	 total_marks?:any;
     grade?:number;
     exam_title?:any;



    constructor(student_id:any,class1:any,section:any,subjectwise_result:any,pass_fail:any,total_marks:any,grade:number,exam_title:any){

        this.student_id=student_id;
        this.class1=class1;
        this.section=section;
        this.subjectwise_result=subjectwise_result;
        this.pass_fail=pass_fail;
        this.pass_fail=pass_fail;
        this.total_marks=total_marks;
        this.grade=grade;
        this.exam_title=exam_title;
     }

}