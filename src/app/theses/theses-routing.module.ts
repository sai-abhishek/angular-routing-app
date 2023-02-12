import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canDeactivateGuard } from '../can-deactivate.guard';
import { ThesisCenterHomeComponent } from './thesis-center-home/thesis-center-home.component';
import { ThesisCenterComponent } from './thesis-center/thesis-center.component';
import { ThesisDetailComponent } from './thesis-detail/thesis-detail.component';
import { ThesisListComponent } from './thesis-list/thesis-list.component';

const routes: Routes = [
  {
    path: 'theses',
    component: ThesisCenterComponent,
    children: [
      {
        path: '',
        component: ThesisListComponent,
        children: [
          {
            path: ':id',
            component: ThesisDetailComponent,
            canDeactivate: [canDeactivateGuard],
          },
          {
            path: '',
            component: ThesisCenterHomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThesesRoutingModule {}
