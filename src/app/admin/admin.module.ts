import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [
    CommonModule, FormsModule, routing
  ],
  providers: [AuthGuard]
})
export class AdminModule { }
