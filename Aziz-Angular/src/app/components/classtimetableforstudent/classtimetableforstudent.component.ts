import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classroutine } from 'src/app/models/classroutine';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-classtimetableforstudent',
  templateUrl: './classtimetableforstudent.component.html',
  styleUrls: ['./classtimetableforstudent.component.css']
})
export class ClasstimetableforstudentComponent implements OnInit {
  selectedClass:any;
  selectedSection:any;
  

  classList :string[]=[];
  sectionList:string [] =[];
// ....show table on UI.........
classRoutineData:Classroutine [] =[];
originalClassRoutineData:Classroutine[] = [];

constructor( private myservice:SchoolService,private router:Router) { 

  this.myservice.getClassRoutine().subscribe((x)=>{
    this.originalClassRoutineData=x
  });

  // ....end...
 
}
ngOnInit(): void {

  this.classList = this.myservice.getClassList();
}



classValueChange(){
  this.sectionList = this.myservice.getAllSectionList(this.selectedClass);
  this.selectedSection = this.sectionList[0];
  this.filterClassRoutineData();

}

  filterClassRoutineData(){

    if (this.originalClassRoutineData){
      this.classRoutineData = this.originalClassRoutineData.filter(classRoutineRow =>
         classRoutineRow.class1==this.selectedClass && classRoutineRow.section ==this.selectedSection)
  
    }
  }

  showAll() {
    this.selectedClass = null;
    this.selectedSection = null;
    let list = this.originalClassRoutineData;
    this.classRoutineData = list;
  }
}
