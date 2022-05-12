import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { BranchComponent } from './branch/branch.component';
import { SubjectComponent } from './subject/subject.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path:'signup', component: SignupFormComponent},
  {path :'dashboard', component:DashboardComponent},
  {path : 'courses/:id', component: CoursesComponent}, 
  // parameterized Routing . It will work for all ids. id is dynamic.

  {path:'branch',component:BranchComponent},      
  {path:'branch', children:[                       // Child Routing inside routes branch.
    {path:'subject',component:SubjectComponent}    //
  ]},

  {path:'college',loadChildren:() => import('./college/college.module').then(m => m.CollegeModule)}, 
  // Lazy loading

  {path:'user', component:UserComponent , canActivate:[AuthGuard]}, // Router Guard

  {path : 'admin', component:AdminComponent},
  {path : "**", component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
