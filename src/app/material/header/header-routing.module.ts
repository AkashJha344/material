import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatHeaderComponent } from './mat-header/mat-header.component';
console.log("header module loaded")
const routes: Routes = [
  {path:'dialog', component:DialogComponent},
  {path:'mat-header', component:MatHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
