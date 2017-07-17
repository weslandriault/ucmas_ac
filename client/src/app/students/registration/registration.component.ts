import { Component, OnInit } from '@angular/core';
// Students Model
import { Student } from '../student';

@Component({
  selector: 'students-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
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

  model = new Student();

  onSubmit = function () {
    console.log(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
