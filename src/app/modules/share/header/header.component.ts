import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private router= inject(Router);


  navigateToSection(sectionId: string): void {
    // 1. Controlla se siamo già sulla Home Page ('/') o '/home'
    // .url restituisce il percorso attuale, inclusi i parametri.
    const isHomePage = this.router.url === '/' || this.router.url.startsWith('/home');

    if (isHomePage) {
      // 2. Se siamo sulla Home, esegui lo scroll (riutilizzando la tua vecchia logica)
      this.scrollTo(sectionId);
    } else {
      this.router.navigate(['/home'], { fragment: sectionId });
    }
  }


  scrollTo(sectionId: string): void {
    // Seleziona l'elemento con l'ID specificato
    const element = document.getElementById(sectionId);
    // Verifica se l'elemento esiste
    if (element) {
      // Usa l'API nativa dello scorrimento del browser
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
