import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInfo } from '../Model/Courses';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public studentList:any=[];
  public searchedData:any=[];

  constructor(private myRecieveRoute:ActivatedRoute){

  }

  ngOnInit(): void {
      this.studentList=CourseInfo.getStudents();
      let course_id=this.myRecieveRoute.snapshot.paramMap.get('data');
      console.log(course_id);
      this.searchedData=this.studentList.filter((sObj:any)=>{
        if(sObj.course==course_id){
          console.log(sObj.stud_name);
          return sObj;
        }
      });
      localStorage.clear();
      console.log(this.searchedData);
  }
}
