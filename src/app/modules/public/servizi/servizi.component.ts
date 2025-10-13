import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.scss']
})
export class ServiziComponent {
  constructor(private router: Router) {}


  services = [
    {
      title: 'Rinnovo patente',
      image: 'assets/images/servizi/rinnovoPatente.jpeg',
      description: 'Navigando nell’intricato tessuto della vita, le scelte svelano percorsi verso l’eccezionale...',
      link: '/servizi/rinnovo-patente'
    },
    {
      title: 'Immatricolazione veicoli esteri',
      image: 'assets/images/servizi/immatricolazione.jpeg',
      description: 'Richiedendo creatività, curiosità e coraggio per un viaggio veramente appagante.',
      link: '/servizi/immatricolazione-veicoli'
    },
    {
      title: 'Pagamento bollo auto',
      image: 'assets/images/servizi/pagamentoBollo.jpeg',
      description: 'Navigando nell’intricato tessuto della vita, le scelte svelano percorsi verso l’eccezionale...',
      link: '/servizi/bollo-auto'
    },
    {
      title: 'Passaggio di proprietà',
      image: 'assets/images/servizi/passaggioProprieta.jpeg',
      description: 'Richiedendo creatività, curiosità e coraggio per un viaggio veramente appagante.',
      link: '/servizi/passaggio-proprieta'
    }
  ];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
