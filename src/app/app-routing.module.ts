import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MoviedeatilsComponent } from './component/moviedeatils/moviedeatils.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'movieDeatils/:id', component:MoviedeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
