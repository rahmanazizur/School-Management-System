export class Onlineadmission {

    full_name: any;
    dob: any;
    email: any;
    mob: any;
    gender: any;
    fathername: any;
    mothername: any;
    class1: any;
    section: any;
    present_address: any;
    permanent_address: any;
    session: any;
    
    username: any;
    password: any;
    image: any
    responseMessage:any;
    constructor(full_name: any, dob: any, email: any, mob: any, gender: any, fathername: any, mothername: any, class1: any, 
        section: any, present_address: any, permanent_address: any, session: any,  username: any, password: any, image: any, responseMessage?:any) {

        this.full_name = full_name;
        this.dob = dob;
        this.email = email;
        this.dob = dob;

        this.email = email;
        this.mob = mob;
        this.gender = gender;
        this.fathername = fathername;

        this.mothername = mothername;
        this.class1 = class1;
        this.section = section;
        this.present_address = present_address;
        this.permanent_address = permanent_address;
        this.session = session;
   
        this.username = username;
        this.password = password;
        this.image = image;
        this.responseMessage = responseMessage;
    }


}
