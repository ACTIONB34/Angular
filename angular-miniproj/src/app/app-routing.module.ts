import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovListComponent } from './mov-list/mov-list.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  { path: 'movies', component: MovListComponent, children: [
    { path: '', redirectTo: 'info', pathMatch: 'full'},
    { path: ':id', component: ShowComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
