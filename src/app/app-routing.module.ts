import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//Url vers les pages mettre le nom du composant
const routes: Routes = [
  // rederige le user sur la page home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageAccueilComponent },
  { path: 'details', component: PageDetailsComponent },
  { path: '**', component: PageNotFoundComponent }, //page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
