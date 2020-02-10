import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

/*
A typical Angular Route has following two properties:

path: a string that matches the URL in the browser address bar.
component: the component that the router should create when navigating to this route.
*/
const routes: Routes = [
  // redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // Generally don't declare components in a routing module
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
