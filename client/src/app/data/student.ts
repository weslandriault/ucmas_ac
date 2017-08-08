import { Parent } from './parent';

interface Details {
  studentRegistrationNumber: string,
  batchCode: string,
  courseInstructor: string,
  batchDays: string,
  batchTimings: string,
  beginClassDate: string
  franchisee: string,
  location: string,
  studyingInGrade: number
}

interface ContactInfo {
  address: string,
  city: string,
  province: string,
  postalCode: string,
  phoneNumber: string,
  schoolName: string,
}

interface DirectedFrom {
  referral: boolean,
  newspaperAdvt: boolean,
  tvAds: boolean,
  radioAds: boolean,
  flyers: boolean,
  signage: boolean,
  others: string
}

interface Preferences {
  preferredDays: string,
  preferredTimings: string
}

interface MedicalDetails {
  healthCardNumber: string,
  specialMedicalInstructions: string
}

let defaultDetails: Details = {
  studentRegistrationNumber: '',
  batchCode: '',
  courseInstructor: '',
  batchDays: '',
  batchTimings: '',
  beginClassDate: '',
  franchisee: '',
  location: '',
  studyingInGrade: null
}

let defaultContactInfo: ContactInfo = {
  address: '',
  city: '',
  province: '',
  postalCode: '',
  phoneNumber: '',
  schoolName: ''
}

let defaultDirectedFrom: DirectedFrom = {
  referral: false,
  newspaperAdvt: false,
  tvAds: false,
  radioAds: false,
  flyers: false,
  signage: false,
  others: ''
}

let defaultPreferences: Preferences = {
  preferredDays: '',
  preferredTimings: ''
}

let defaultMedicalDetails: MedicalDetails = {
  healthCardNumber: '',
  specialMedicalInstructions: ''
}

export class Student {
  public firstName: string = '';
  public lastName: string = '';
  public dateOfBirth: string = '';
  public gender: string = '';
  public status: string = '';
  public details: Details = defaultDetails;
  public contactInfo: ContactInfo = defaultContactInfo;
  public creationDate: string = '';
  public lastModifiedDate: string = '';
  public registrationDate: string = '';
  public directedFrom: DirectedFrom = defaultDirectedFrom;
  public preferences: Preferences = defaultPreferences;
  public medicalDetails: MedicalDetails = defaultMedicalDetails;
  public parents: [Parent] = [
    { role: 'Mother', fullName: '', phoneNumber: '', email: ''},
    { role: 'Father', fullName: '', phoneNumber: '', email: ''}
  ];
  public formIdNo: number = null

  public constructor(studentObj?:Partial<Student>) {
    Object.assign(this, studentObj);
  }
}