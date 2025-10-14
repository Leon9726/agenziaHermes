import { Component, OnInit } from '@angular/core';
import { services } from '../../../../../data/services-data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettaglio-servizio',
  templateUrl: './dettaglio-servizio.component.html',
  styleUrl: './dettaglio-servizio.component.scss'
})
export class DettaglioServizioComponent implements OnInit {
  service: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Leggi il parametro 'path' dall'URL
    this.route.paramMap.subscribe(params => {
      const servicePath = params.get('path');
      
      // Cerca il servizio nell'array che corrisponde al path
      this.service = services.find(s => s.path === servicePath);
      
      // Se il servizio non viene trovato, puoi reindirizzare l'utente alla pagina 404
      if (!this.service) {
        
      }
    });
  }
}
