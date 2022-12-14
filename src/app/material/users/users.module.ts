import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { UserstableComponent } from './userstable/userstable.component';
import { MatModule } from './mat/mat.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    UserstableComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    UsersRoutingModule,
    MatModule,
    ReactiveFormsModule
    
  ]
})
export class UsersModule { }
