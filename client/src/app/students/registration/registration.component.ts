import { Component, OnInit } from '@angular/core';
import { Student } from '../../data/student';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'students-registration',
  templateUrl: './registration.component.html',
  providers: [StudentService],
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
  constructor(private studentService: StudentService) { }
  familyEmail = '';
  preferredDays = [
    'Week-ends',
    'Week-days',
    'No preference'
  ];

  genderOptions = [
    "Male",
    "Female",
    "Other"
  ];

  studentHeardFromOptions = {
    referral: 'Friend\'s Referral',
    newspaperAdvt: 'Newspaper Advt',
    tvAds: 'TV Ads',
    radioAds: 'Radio Ads',
    flyers: 'Flyers',
    signage: 'Signage',
    others: 'Others'
  }

  model = new Student({
    details: {
      studentRegistrationNumber: null,
      batchCode: null,
      courseInstructor: null,
      batchDays: null,
      batchTimings: null,
      beginClassDate: null,
      franchisee: 'UCMAS Waterloo',
      location: 'Waterloo'
    }
  });

  nowSet = function ($event) {
    console.log($event.target);
    this.model.parents[0].email = this.model.parents[1].email = $event.target.val
  }

  onSubmit = function () {
    console.log(this.model);
    console.log(StudentService)
    console.log(this.studentService)
    this.studentService.create(this.model)
      .then((response) => {
        console.log(`Check it: ${response}`)
      })
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
