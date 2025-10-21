import { Component, inject, OnInit } from '@angular/core';
import { services } from '../../../../../data/services-data';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dettaglio-servizio',
  templateUrl: './dettaglio-servizio.component.html',
  styleUrl: './dettaglio-servizio.component.scss'
})
export class DettaglioServizioComponent implements OnInit {
  service: any;
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);


  ngOnInit(): void {
    // Leggi il parametro 'path' dall'URL
    this.route.paramMap.subscribe(params => {
      const servicePath = params.get('path');
      
      // Cerca il servizio nell'array che corrisponde al path
      this.service = services.find(s => s.path === 'servizi/'+servicePath);
      
      // Se il servizio non viene trovato, puoi reindirizzare l'utente alla pagina 404
      if (!this.service) {
        
      }
    });
  }

   goToContatti() {
    this.router.navigate(['/contattiDettaglio']);
  }
}
