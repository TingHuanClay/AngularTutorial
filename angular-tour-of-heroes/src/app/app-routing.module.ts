import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

/*
A typical Angular Route has following two properties:

path: a string that matches the URL in the browser address bar.
component: the component that the router should create when navigating to this route.
*/
const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
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
