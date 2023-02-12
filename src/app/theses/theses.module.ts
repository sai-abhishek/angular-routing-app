import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThesesRoutingModule } from './theses-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { ThesisCenterComponent } from './thesis-center/thesis-center.component';
import { ThesisListComponent } from './thesis-list/thesis-list.component';
import { ThesisDetailComponent } from './thesis-detail/thesis-detail.component';
import { ThesisCenterHomeComponent } from './thesis-center-home/thesis-center-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ThesisCenterComponent,
    ThesisListComponent,
    ThesisDetailComponent,
    ThesisCenterHomeComponent,
  ],
  imports: [
    CommonModule,
    ThesesRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
})
export class ThesesModule {}
