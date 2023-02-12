import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student-service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  selectedID!: number;
  student: Student | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.selectedID = Number(params.get('id'));
          return this.studentService.getStudent(this.selectedID);
        })
      )
      .subscribe((student) => (this.student = student));
  }

  goBack(student: Student) {
    const id = student ? student.id : null;
    this.router.navigate(['/students', { id: id }]);
  }
}
