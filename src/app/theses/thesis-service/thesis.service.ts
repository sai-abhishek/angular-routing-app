import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Thesis } from 'src/app/theses/thesis';

const THESIS_LIST_DATA: Thesis[] = [
  {
    id: 103,
    name: 'Measuring human energy expenditure: public health application to counter inactivity',
    score: 92,
    startDate: new Date(2019, 11, 17),
  },
  {
    id: 104,
    name: 'A Systematic Mapping Study on Software Reuse',
    score: 90,
    startDate: new Date(2020, 11, 17),
  },
  {
    id: 105,
    name: 'Electrochemical conversion of carbon dioxide to ethylene: Plant design, evaluation and prospects for the future',
    score: 94,
    startDate: new Date(2021, 11, 17),
  },
];

@Injectable({
  providedIn: 'root',
})
export class ThesisService {
  thesisList = THESIS_LIST_DATA;

  constructor(private http: HttpClient) {}

  getTheses(): Observable<Thesis[]> {
    return this.http.get<Thesis[]>('http://localhost:3000/api/theses');
    // .pipe(catchError((err) => this.handleError(err)));
  }

  getThesis(id: number): Observable<Thesis> {
    return this.http.get<Thesis>(`http://localhost:3000/api/theses/${id}`);
    // .pipe(catchError((err) => this.handleError(err)));
  }

  // private handleError(errResponse: HttpErrorResponse) {
  //   const errorMessage = errResponse.error?.message;
  //   return throwError(errorMessage);
  // }
}
