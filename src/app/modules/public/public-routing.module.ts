import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioServizioComponent } from './servizi/dettaglio/dettaglio-servizio/dettaglio-servizio.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Page', breadcrumb: 'Home Page', context: 'public' },
  },
  { path: 'servizi/:path', component: DettaglioServizioComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'contatti', component: ContattiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
