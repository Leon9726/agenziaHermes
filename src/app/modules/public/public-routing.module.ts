import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioServizioComponent } from './servizi/dettaglio/dettaglio-servizio/dettaglio-servizio.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
