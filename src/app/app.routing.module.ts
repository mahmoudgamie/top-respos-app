import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopReposListComponent } from './top-repos-list/top-repos-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-repos',
    pathMatch: 'full'
  },
  {
    path: 'list-repos',
    component: TopReposListComponent,
  },
  {
    path: '**',
    redirectTo: 'list-repos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }