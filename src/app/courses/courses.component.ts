import { Component, OnInit } from '@angular/core';
import { CourseInfo } from '../Model/Courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {

  public courseList:any=[];
  constructor(private myRoute:Router) {

  }

  ngOnInit(): void {
    this.courseList=CourseInfo.getCourses();
    console.log(this.courseList);
  }

  onSelect(cObj:any){

    console.log(cObj);
    localStorage.setItem('token','1');
    this.myRoute.navigate(['students',cObj.course_id]);

  }
}
