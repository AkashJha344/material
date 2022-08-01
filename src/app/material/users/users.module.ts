import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { UserstableComponent } from './userstable/userstable.component';
import { MatModule } from './mat/mat.module';


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    UserstableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatModule,
    
  ]
})
export class UsersModule { }
