import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    HomeComponent,
    ServiziComponent,
    ContattiComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ShareModule,
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
