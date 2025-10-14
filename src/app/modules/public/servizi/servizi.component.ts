import { services } from './../../../data/services-data';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.scss']
})
export class ServiziComponent {
  constructor(private router: Router) {}

  public services = services

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
