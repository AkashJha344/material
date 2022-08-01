import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './material/users/login/login.component';
import { SingupComponent } from './material/users/singup/singup.component';
import { UserstableComponent } from './material/users/userstable/userstable.component';

const routes: Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},
  {path: 'header', loadChildren:()=> import('./material/header/header.module').then(m => m.HeaderModule)},
  {path: 'users', loadChildren:()=> import('./material/users/users.module').then(m => m.UsersModule)}
  // {path:'users/login', component:LoginComponent},
  // {path:'users/singup', component:SingupComponent},
  // {path:'users/userstable', component:UserstableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
