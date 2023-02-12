import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Student } from '../student';

// const STUDENT_LIST_DATA: Student[] = [
//   {
//     id: 1,
//     name: 'Abraham',
//     program: 'Pharm.D',
//     specialisation: 'Cancer',
//   },
//   {
//     id: 2,
//     name: 'Abhishek',
//     program: 'M.Eng',
//     specialisation: 'Software',
//   },
//   {
//     id: 3,
//     name: 'Ashwin',
//     program: 'PGD',
//     specialisation: 'Chemical Processes',
//   },
// ];

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentsList: Student[] = [];

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    // return of(this.studentsList);
    return this.http
      .get<Student[]>('http://localhost:3000/api/students')
      .pipe(catchError((err) => this.handleError(err)));
  }

  getStudent(id: number): Observable<Student> {
    return this.http
      .get<Student>(`http://localhost:3000/api/students/${id}`)
      .pipe(catchError((err) => this.handleError(err)));
  }
  private handleError(error: Response) {
    console.error(error);
    return throwError(() => new Error('Student not found'));
  }
}
