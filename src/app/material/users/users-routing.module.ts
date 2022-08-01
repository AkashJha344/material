import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { UserstableComponent } from './userstable/userstable.component';
console.log("users module loaded")
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'singup', component:SingupComponent},
  {path: 'userstable', component:UserstableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
