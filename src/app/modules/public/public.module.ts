import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ContattiComponent } from './contatti/contatti.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServiziComponent,
    ContattiComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ShareModule
],
  exports: [
    ServiziComponent
  ]
})
export class PublicModule { }
