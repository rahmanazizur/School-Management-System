import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLASS_NAME, SECTION_NAME } from 'src/app/common/enums';
import { Classroutine } from 'src/app/models/classroutine';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-classtimetable',
  templateUrl: './classtimetable.component.html',
  styleUrls: ['./classtimetable.component.css']
})
export class ClasstimetableComponent implements OnInit {

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

  this.classList = ["1st", "2nd","3rd","4th", "5th","6th","7th", "8th","9th","10th"]
}



classValueChange(){

  let upperClass = [CLASS_NAME.NINE, CLASS_NAME.TEN];

  if( upperClass.includes(this.selectedClass)){

    this.sectionList = [SECTION_NAME.SCIENCE, SECTION_NAME.BUSINESS_STUDIES, SECTION_NAME.HUMANITIES];

    this.selectedSection = SECTION_NAME.SCIENCE;

  }else{
    this.sectionList =["",SECTION_NAME.SECTION_A, SECTION_NAME.SECTION_B, SECTION_NAME.SECTION_C];
    this.selectedSection = SECTION_NAME.SECTION_A;

  }

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
