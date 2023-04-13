import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MaterialModule,
    DashboardModule,
  ],
  exports: [
    DashboardModule,
  ]
})
export class PrivateModule { }
