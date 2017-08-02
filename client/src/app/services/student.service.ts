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

  findAll(): Promise<Student[]> {
    return this.http
      .get('/api/students', { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json() as Student[]
      })
      .catch(this.handleError)
  }

  create(student: Student): Promise<Student> {
    const reqData = JSON.stringify(student);

    return this.http
      .post('/api/students', reqData, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Student)
      .catch(this.handleError);
  }
}
