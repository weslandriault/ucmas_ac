import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../data/student';

@Component({
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [StudentService],
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(
    private studentService:StudentService,
    private router:Router
  ) {
    this.studentService.findAll()
      .then((students) => {
        this.students = students
          .map(student => {
            student.status = student.status
              .split(' ')
              .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
              .join();
            return student;
          });
      })
    
  }

  ngOnInit() {
  }

  goToRegistration(): void {
    this.router.navigate(['students', 'registration'])
  }

  calculateAge(dateOfBirth) {
    if (!dateOfBirth) {
      return null;
    }
    
    const dateSplit = dateOfBirth.split('-');
    const birthYear = dateSplit[0];
    const birthMonth = dateSplit[1]
    const birthDay = dateSplit[2];

    const currentDay = (new Date()).getDate();
    const currentMonth = (new Date()).getMonth() + 1;
    const currentYear = (new Date()).getFullYear();

    return `${(currentYear - birthYear)} years old`;
  }

}
