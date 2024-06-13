import lodash from 'lodash';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Admindetail } from '../models/admindetail';
import { Addstudent } from '../models/addstudent';
import { Onlineadmission } from '../models/onlineadmission';
import { AddteacherComponent } from '../components/addteacher/addteacher.component';
import { Addteacher } from '../models/addteacher';
import { Classroutine } from '../models/classroutine';
import { Examschedule } from '../models/examschedule';
import { Attendanceinfo } from '../models/attendanceinfo';
import { Resultinfo } from '../models/resultinfo';
import { StudentResultInfoDTO } from '../models/studentresultinfodto';
import { CLASS_NAME, SECTION_NAME, SUBJECT_NAME } from '../common/enums';
import { FeeManagementRequestDTO } from '../models/feemanagementrequestdto';
import { FeeManagement } from '../models/feemanagement';
import { FeePaymentDTO } from '../models/feepaymentdto';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  currentStudent:Addstudent = {} as Addstudent;
  constructor(private http:HttpClient) { }

  url:any;
  

  loginByEmail(email:any,password:any):Observable<Admindetail>{
    this.url="http://localhost:8080/";
    return this.http.get<Admindetail>(this.url+email+"/"+password);
  }

  addstudentbyadmin(s:Addstudent):Observable<Addstudent>{
    this.url="http://localhost:8080/allstudent";//spring er default url
    return this.http.post<Addstudent>(this.url,s); 

}
// ...get data from data to show UI...
getallstudent():Observable<Addstudent[]>{
  this.url="http://localhost:8080/getall";//spring er default url
  return this.http.get<Addstudent[]>(this.url);
}

// ...........update part step-2 start........

search(student_id:any): Observable<Addstudent> {
  this.url = "http://localhost:8080/search/";
  return this.http.get<Addstudent>(this.url+student_id);

}
update(s: Addstudent): Observable<Addstudent> {
  this.url = "http://localhost:8080/update";
  return this.http.put<Addstudent>(this.url, s);

}


delete(s:any):Observable<Addstudent>{
  this.url="http://localhost:8080/delete/"+s;
  return this.http.delete<Addstudent>(this.url);



}

// .............add teacher by Admin........

addteacherByadmin(s:Addteacher):Observable<Addteacher>{
  this.url="http://localhost:8080/allteacher";//spring er default url
  return this.http.post<Addteacher>(this.url,s); 

}

getallteacher():Observable<Addteacher[]>{
  this.url="http://localhost:8080/getteacher";
  return this.http.get<Addteacher[]>(this.url);
}




// ...........save online admission form data........
admissionSubmit(s:Onlineadmission):Observable<Onlineadmission>{
  this.url="http://localhost:8080/form";
  return this.http.post<Onlineadmission>(this.url,s);

}

// ...........show online admission form data........

getnewApplicants():Observable<Onlineadmission>{
  this.url="http://localhost:8080/newapplicant";
  return this.http.get<Onlineadmission>(this.url);
}



// ...........search for new Applicant update step-2 start........



searchapproval(email:any): Observable<Onlineadmission> {
  this.url = "http://localhost:8080/searchapproval/";
  return this.http.get<Onlineadmission>(this.url+email);

}

reject(s:any):Observable<Onlineadmission>{
  this.url="http://localhost:8080/reject/"+s;
  return this.http.delete<Onlineadmission>(this.url);
}

// ...........save approvalstudent data to another database........
Approve(s:Onlineadmission):Observable<Onlineadmission>{
  this.url="http://localhost:8080/senddata";
  return this.http.post<Onlineadmission>(this.url,s);

}
// ..........insert class routine data.............
saveClassRoutine(s:Classroutine):Observable<Classroutine>{
  this.url="http://localhost:8080/classroutine";
  return this.http.post<Classroutine>(this.url,s); 

}
getClassRoutine():Observable<Classroutine []>{
  this.url="http://localhost:8080/getroutine";
  return this.http.get<Classroutine []>(this.url);
}


// .............add Exam Schedule by Admin........

examSchedule(s:Examschedule):Observable<Examschedule>{
  this.url="http://localhost:8080/examschedule";
  return this.http.post<Examschedule>(this.url,s); 

}

getExamSchedule():Observable<Examschedule []>{
  this.url="http://localhost:8080/getexamschedule";
  return this.http.get<Examschedule []>(this.url);
}

getSubjectByClasswise(selectedClass: any, section: any) {
  let generalSubjectsOfOneToFive = [SUBJECT_NAME.BANGLA, SUBJECT_NAME.ENGLISH, SUBJECT_NAME.MATH, SUBJECT_NAME.SCIENCE];
  let generalSubjectsOfSixToEight = [...generalSubjectsOfOneToFive, SUBJECT_NAME.RELIGION, SUBJECT_NAME.SOCIOLOGY, SUBJECT_NAME.AGRICULTURE];
  let subjectsOfScienceStudent = [SUBJECT_NAME.BANGLA, SUBJECT_NAME.ENGLISH, SUBJECT_NAME.GENERAL_MATH, SUBJECT_NAME.RELIGION, SUBJECT_NAME.PHYSICS, SUBJECT_NAME.CHEMISTRY, SUBJECT_NAME.BIOLOGY];
  let subjectsOfBusinessStudent = [SUBJECT_NAME.BANGLA, SUBJECT_NAME.ENGLISH, SUBJECT_NAME.GENERAL_MATH, SUBJECT_NAME.RELIGION, SUBJECT_NAME.FINANCE, SUBJECT_NAME.ACCOUNTING ];
  let subjectsOfHuminitiesStudent = [SUBJECT_NAME.BANGLA, SUBJECT_NAME.ENGLISH, SUBJECT_NAME.GENERAL_MATH, SUBJECT_NAME.RELIGION, SUBJECT_NAME.HISTORY, SUBJECT_NAME.GEOGRAPHY, SUBJECT_NAME.ECONOMICS];
  let classOneToFive = [CLASS_NAME.ONE, CLASS_NAME.TWO, CLASS_NAME.THREE, CLASS_NAME.FOUR, CLASS_NAME.FIVE];
  let classSixToEight = [CLASS_NAME.SIX, CLASS_NAME.SEVEN, CLASS_NAME.EIGHT];
  if (classOneToFive.includes(selectedClass)) {
    return generalSubjectsOfOneToFive;
  } else if (classSixToEight.includes(selectedClass)) {
    return generalSubjectsOfSixToEight;
  } else if (selectedClass == CLASS_NAME.NINE || selectedClass == CLASS_NAME.TEN) {
    if (section == SECTION_NAME.SCIENCE) {
      return subjectsOfScienceStudent;
    } else if (section == SECTION_NAME.BUSINESS_STUDIES) {
      return subjectsOfBusinessStudent;
    } else if (section == SECTION_NAME.HUMANITIES) {
      return subjectsOfHuminitiesStudent;
    }
  }
  return [];
}

takeAttendance(s:Attendanceinfo):Observable<Attendanceinfo>{
  this.url="http://localhost:8080/takeattendance";
  return this.http.post<Attendanceinfo>(this.url,s); 

}

getAttendance():Observable<Attendanceinfo []>{
  this.url="http://localhost:8080/getattendance";
  return this.http.get<Attendanceinfo []>(this.url);
}


saveStudentResult(s:Resultinfo[]):Observable<Resultinfo[]>{
  this.url="http://localhost:8080/saveresultinfo";
  return this.http.post<Resultinfo[]>(this.url,s);
}

getClassList() {
  return [CLASS_NAME.ONE, CLASS_NAME.TWO, CLASS_NAME.THREE, CLASS_NAME.FOUR, CLASS_NAME.FIVE, CLASS_NAME.SIX, CLASS_NAME.SEVEN, 
    CLASS_NAME.EIGHT, CLASS_NAME.NINE, CLASS_NAME.TEN];
}

getAllSectionList(class1: string) {
  if (class1 == CLASS_NAME.NINE || class1 == CLASS_NAME.TEN) {
    return [SECTION_NAME.SCIENCE, SECTION_NAME.BUSINESS_STUDIES, SECTION_NAME.HUMANITIES];
  }
  return [SECTION_NAME.SECTION_A, SECTION_NAME.SECTION_B, SECTION_NAME.SECTION_C];
}


getStudentResultInfoList(s:Resultinfo):Observable<StudentResultInfoDTO[]> {
  this.url="http://localhost:8080/getresultinfolist";
  return this.http.post<StudentResultInfoDTO[]>(this.url, s);
}

getStudentResultInfoListByStuentId(s:Resultinfo):Observable<StudentResultInfoDTO[]> {
  this.url="http://localhost:8080/getresultinfolistbystudentid";
  return this.http.post<StudentResultInfoDTO[]>(this.url, s);
}

saveFeeManagementDetail(s:FeeManagementRequestDTO) {
  this.url="http://localhost:8080/savefeemanagementdetail";
  return this.http.post<void>(this.url, s);
}

getFeeManagementRecords(s:FeeManagementRequestDTO):Observable<FeePaymentDTO[]> {
  this.url="http://localhost:8080/getfeepaymentdetail";
  return this.http.post<FeePaymentDTO[]>(this.url, s);
}

updatePaymentStatus(s:FeePaymentDTO[]) {
  this.url="http://localhost:8080/updatePaymentStatus";
  return this.http.post<void>(this.url, s);
}

submitPayment(s:FeePaymentDTO) {
  this.url="http://localhost:8080/submitPayment";
  return this.http.post<void>(this.url, s);
} 

getStudentByEmail(s:any):Observable<Addstudent> {
  this.url="http://localhost:8080/getStudentByEmail";
  return this.http.post<Addstudent>(this.url, s);
}

setCurrentStudent(currentStudent: Addstudent) {
  this.currentStudent = currentStudent;
}

getCurrentStudent() {
  return lodash.cloneDeep(this.currentStudent);
}

}
