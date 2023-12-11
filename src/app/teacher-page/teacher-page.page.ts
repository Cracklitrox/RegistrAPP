import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.page.html',
  styleUrls: ['./teacher-page.page.scss'],
})
export class TeacherPagePage implements OnInit {

  teacherData = {
    name: 'Francisco Calfun',
    email: 'Calfun@duocuc.cl',
    subject: 'Programación de Sofware',
  };


  constructor() { }

  ngOnInit() {
  }

}
