import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';

import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { UpdateComponent } from './components/update/update.component';
import { SchoolService } from './services/school.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgbModule ,NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentpageComponent } from './components/studentpage/studentpage.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';
import { FailpageComponent } from './components/failpage/failpage.component';
import { OnlineadmissionComponent } from './components/onlineadmission/onlineadmission.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
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
import { CommonModule } from '@angular/common';
import { FeemanagementComponent } from './components/feemanagement/feemanagement.component';
import { ViewfeerecordsComponent } from './components/viewfeerecords/viewfeerecords.component';
import { StudentfeesubmissionComponent } from './components/studentfeesubmission/studentfeesubmission.component';
import { ViewresultComponent } from './components/viewresult/viewresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
 
    AdminpageComponent,
    SidebarComponent,
    AddstudentComponent,
    ViewstudentComponent,
    UpdateComponent,
    SidenavComponent,
    StudentpageComponent,
    TeacherpageComponent,
    FailpageComponent,
    OnlineadmissionComponent,
    NewapplicantsComponent,
    AddteacherComponent,
    ViewteacherComponent,
    CarouselComponent,
    ApprovalstudentComponent,
    ClassroutineComponent,
    ExamscheduleComponent,
    ClasstimetableComponent,
    ExamschedulelistComponent,
    AttendanceComponent,
    ExamschedulforteacherComponent,
    AttendancelistComponent,
    ClasstimetableforstudentComponent,
    StudentresultComponent,
    FeemanagementComponent,
    ViewfeerecordsComponent,
    StudentfeesubmissionComponent,
    ViewresultComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule
    
  
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
