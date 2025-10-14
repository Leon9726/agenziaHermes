import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


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
