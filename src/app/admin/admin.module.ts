import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageThesesComponent } from './manage-theses/manage-theses.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageThesesComponent,
    ManageStudentsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
