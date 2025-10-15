import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { PublicRoutingModule } from './public-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { ContattiDettaglioComponent } from './contatti/dettaglio/contatti-dettaglio/contatti-dettaglio.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServiziComponent,
    ContattiComponent,
    ContattiDettaglioComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    FontAwesomeModule
],
  exports: [
    ServiziComponent
  ]
})
export class PublicModule { 
 constructor(library: FaIconLibrary) {
    // Aggiungi l'intero set di icone "solide" (fas)
    library.addIconPacks(fas);
  }

}
