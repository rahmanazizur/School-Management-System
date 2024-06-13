import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';

import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { UpdateComponent } from './components/update/update.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';
import { StudentpageComponent } from './components/studentpage/studentpage.component';
import { FailpageComponent } from './components/failpage/failpage.component';
import { OnlineadmissionComponent } from './components/onlineadmission/onlineadmission.component';
import { NewapplicantsComponent } from './components/newapplicants/newapplicants.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';
import { ViewteacherComponent } from './components/viewteacher/viewteacher.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ApprovalstudentComponent } from './components/approvalstudent/approvalstudent.component';
import { ClassroutineComponent } from './components/classroutine/classroutine.component';
import { ExamscheduleComponent } from './components/examschedule/examschedule.component';
import { ClasstimetableComponent } from './components/classtimetable/classtimetable.component';
import { ExamschedulelistComponent } from './components/examschedulelist/examschedulelist.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ExamschedulforteacherComponent } from './components/examschedulforteacher/examschedulforteacher.component';
import { AttendancelistComponent } from './components/attendancelist/attendancelist.component';
import { ClasstimetableforstudentComponent } from './components/classtimetableforstudent/classtimetableforstudent.component';
import { StudentresultComponent } from './components/studentresult/studentresult.component';
import { FeemanagementComponent } from './components/feemanagement/feemanagement.component';
import { ViewfeerecordsComponent } from './components/viewfeerecords/viewfeerecords.component';
import { StudentfeesubmissionComponent } from './components/studentfeesubmission/studentfeesubmission.component';
import { ViewresultComponent } from './components/viewresult/viewresult.component';



const routes: Routes = [

{path:'', component:HomepageComponent},
{path:"header", component:HeaderComponent},
{path:"home", component:HomepageComponent},
{path:"body", component:BodyComponent},
{path:"footer", component:FooterComponent},
{path:"login", component:LoginComponent},
{path:"studentpage", component:StudentpageComponent},
{path:"teacherpage", component:TeacherpageComponent},
{path:"failpage", component:FailpageComponent},
{path:"onlineadmission", component:OnlineadmissionComponent},
{path:'newapplicants', component:NewapplicantsComponent},
{path:'classroutine', component:ClassroutineComponent},
{path:'examschedule', component:ExamscheduleComponent},
{path:'classtimetable', component:ClasstimetableComponent},

{path:"adminpage", component:AdminpageComponent},

{path:"sidebar", component:SidebarComponent},
{path:"viewstudent", component:ViewstudentComponent},
{path:'viewteacher', component:ViewteacherComponent},
{path:"update", component:UpdateComponent},
{path:"sidenav", component:SidenavComponent},
{path:"addteacher", component:AddteacherComponent},
{path:"addstudent", component:AddstudentComponent},
{path:"carousel", component:CarouselComponent},
{path:"approvalstudent", component:ApprovalstudentComponent},
{path:"examschedule", component:ExamscheduleComponent},
{path:"examschedulelist", component:ExamschedulelistComponent},
{path:"attendance", component:AttendanceComponent},
{path:"examscheduleforteacher", component:ExamschedulforteacherComponent},
{path:"attendancelist", component:AttendancelistComponent},
{path:"classtimetableforstudent", component:ClasstimetableforstudentComponent},
{path:"studentresult", component:StudentresultComponent},
{path:"feemanagement", component:FeemanagementComponent},
{path:"viewfeerecords", component:ViewfeerecordsComponent},
{path:"studentfeesubmission", component:StudentfeesubmissionComponent},
{path:"viewresult", component:ViewresultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
