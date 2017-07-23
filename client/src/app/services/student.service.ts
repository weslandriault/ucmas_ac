import { Injectable } from '@angular/core'
import { Student } from '../data/student';
import { Http } from '@angular/http';
import { Headers } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { };

  create(student: Student): Promise<Student> {
    const reqData = JSON.stringify(student);
    return this.http
      .post('/api/students', reqData, { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Student)
      .catch(this.handleError);
    }
}
