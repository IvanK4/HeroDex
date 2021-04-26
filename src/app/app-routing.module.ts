import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroAddComponent } from './public/components/hero-add/hero-add.component';
import { HeroEditComponent } from './public/components/hero-edit/hero-edit.component';
import { HeroesHomeComponent } from './public/components/heroes-home/heroes-home.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesHomeComponent},
  { path: 'hero-add', component: HeroAddComponent},
  { path: 'search/:wantedHero', component: HeroesHomeComponent},
  { path: 'hero-edit/:id', component: HeroEditComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
