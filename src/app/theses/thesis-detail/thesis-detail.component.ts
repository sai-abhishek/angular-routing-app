import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Thesis } from 'src/app/theses/thesis';
import { ThesisService } from 'src/app/theses/thesis-service/thesis.service';
import { DialogService } from 'src/app/utility-services/dialog.service';

@Component({
  selector: 'app-thesis-detail',
  templateUrl: './thesis-detail.component.html',
  styleUrls: ['./thesis-detail.component.css'],
})
export class ThesisDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private thesisService: ThesisService,
    private router: Router,
    public dialogService: DialogService,
    private fb: FormBuilder
  ) {}

  selectedID!: number;
  thesis: Thesis | undefined;

  thesisForm!: FormGroup;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.selectedID = Number(params.get('id'));
          return this.thesisService.getThesis(this.selectedID);
        })
      )
      .subscribe({
        next: (thesis) => {
          this.thesis = thesis;
          this.thesisForm = this.fb.group({
            score: [this.thesis.score],
            startDate: [this.thesis.startDate],
          });
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.status);
        },
      });
  }

  goBack(thesis: Thesis) {
    const id = thesis ? thesis.id : null;
    this.router.navigate(['/theses', { id: id }]);
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (
      !this.thesis ||
      this.thesis.score === this.thesisForm.controls['score'].value
    ) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  onSubmit() {
    if (this.thesis)
      this.thesis.score = this.thesisForm.controls['score'].value;
  }
}
