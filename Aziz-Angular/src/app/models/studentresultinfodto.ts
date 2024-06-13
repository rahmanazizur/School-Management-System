export class StudentResultInfoDTO {
    student_id?:any;
	full_name?:any;
	class1?:any;
	section?:any;
	result_id?:any;
	subjectwise_result?:any;
	pass_fail?:any;
	total_marks?:any;
	grade?:any;
	exam_title?:any;
    subjectwise_result_map?:any;
    isEdited:any;



    constructor(student_id:any, full_name:any, class1:any, section:any, result_id:any, 
        subjectwise_result:any, pass_fail:any, total_marks:any, grade:any, exam_title:any) {
            this.student_id = student_id;
            this.full_name = full_name;
            this.class1 = class1;
            this.section = section;
            this.result_id = result_id;
            this.subjectwise_result = subjectwise_result;
            this.pass_fail = pass_fail;
            this.total_marks = total_marks;
            this.grade = grade;
            this.exam_title = exam_title;
    }
}