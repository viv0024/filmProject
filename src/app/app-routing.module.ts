import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [

  { path: 'login', loadChildren: () => import('./models/login/login.model').then(m => m.LoginModel) },
  {
    path: 'home', loadChildren: () => import('./models/home/home.model').then(m => m.HomeModel)
  },
  { path: 'movie', component: MovieComponent },
  { path: '**', redirectTo: '/login' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
