import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/students/student';
import { StudentService } from 'src/app/students/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}
  studentsList$!: Observable<Student[]>;
  selectedID?: number;

  ngOnInit(): void {
    this.studentsList$ = this.studentService.getStudents();

    this.selectedID = Number(this.route.snapshot.paramMap.get('id'));
  }
}
