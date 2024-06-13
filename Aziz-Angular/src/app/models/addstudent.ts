export class Addstudent {

    student_id:any;
    full_name:any;
 
    dob:any;
    email:any;
    mob:any;
    gender:any;
    class1:any;
    subject:any;
    present_addres:any;
    permanent_address:any;
    session:any;
    status:any;
    section: any;

    constructor (  student_id:any,full_name:any,dob:any,email:any,mob:any,gender:any,class1:any,subject:any,present_addres:any,permanent_address:any,session:any,status:any, section:any){
    
        this.student_id=student_id;
        this.full_name=full_name;
    
        this.dob=dob;
         
        this.email=email;
        this.mob=mob;
        this.gender=gender;
        this.class1=class1;
         
        this.subject=subject;
        this.present_addres=present_addres;
        this.permanent_address=permanent_address;
        this.session=session;
        this.status=status;
        this.section=section;
        }


}
