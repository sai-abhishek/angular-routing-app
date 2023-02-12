import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Thesis } from 'src/app/theses/thesis';
import { ThesisService } from 'src/app/theses/thesis-service/thesis.service';

@Component({
  selector: 'app-thesis-list',
  templateUrl: './thesis-list.component.html',
  styleUrls: ['./thesis-list.component.css'],
})
export class ThesisListComponent {
  constructor(
    private thesisService: ThesisService,
    private route: ActivatedRoute
  ) {}
  thesisList!: Thesis[];
  selectedID?: number;

  ngOnInit(): void {
    this.thesisService.getTheses().subscribe((thesisList) => {
      this.thesisList = thesisList;
    });
    this.selectedID = Number(this.route.snapshot.paramMap.get('id'));
  }
}
