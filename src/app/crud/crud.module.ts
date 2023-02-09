import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
  ReactiveFormsModule,
    FormsModule,

    CrudRoutingModule
  ]
})
export class CrudModule { }
