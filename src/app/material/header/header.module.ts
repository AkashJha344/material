import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MatHeaderComponent } from './mat-header/mat-header.component';
import { MatModule } from '../users/mat/mat.module';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MatHeaderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatModule,
    ReactiveFormsModule
  ]
})
export class HeaderModule { }
