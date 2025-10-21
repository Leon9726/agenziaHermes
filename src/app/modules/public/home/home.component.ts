import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,) { }


  ngOnInit(): void {
    // Sottoscrivi i cambiamenti nel 'fragment' dell'URL
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Usa un breve timeout per assicurarti che il DOM sia completamente renderizzato
        // (Soprattutto se usi un componente figlio come <app-servizi>)
        setTimeout(() => {
          this.scrollToElement(fragment);
        }, 100); 
      }
    });
  }

  // Metodo riutilizzabile per lo scroll
  scrollToElement(fragment: string): void {
      const element = document.getElementById(fragment);
      if (element) {
        // Usa scrollIntoView per uno scorrimento fluido
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' // Allinea l'elemento all'inizio della finestra
        });
        // Console log utile per debug
        console.log(`Scrollo eseguito verso la sezione: #${fragment}`); 
      } else {
        console.warn(`Elemento con ID #${fragment} non trovato nel DOM.`);
      }
  }

  goToContatti() {
    this.router.navigate(['/contattiDettaglio']);
  }

}
