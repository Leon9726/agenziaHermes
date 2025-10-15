import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa le classi necessarie

@Component({
  selector: 'app-contatti-dettaglio',
  templateUrl: './contatti-dettaglio.component.html',
  styleUrls: ['./contatti-dettaglio.component.scss']
})
export class ContattiDettaglioComponent implements OnInit {

  // Dichiarazione della variabile contactForm come FormGroup
  contactForm!: FormGroup;

  // Variabile di stato per mostrare messaggi all'utente
  submissionMessage: string = '';

  constructor(private fb: FormBuilder) { } // Inietta il FormBuilder nel costruttore

  argomenti = [
    'Rinnovo patente',
    'Immatricolazione veicoli esteri',
    'Pagamento bollo auto',
    'Passaggio di proprietà',
    'Altro'
  ];

  // Array per le opzioni dell'orario
  orari = [
    '9:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '15:00 - 16:00',
    '16:00 - 17:00'
  ];

  ngOnInit(): void {
    // Inizializza il form nel metodo ngOnInit
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      argomento: ['', Validators.required],
      giorno: ['', Validators.required],
      orario: ['', Validators.required],
    });
  }

  onSubmit() {
    // Controlla la validità del form prima di inviare
    if (this.contactForm.valid) {
      const serviceID = 'service_j44x4jt';
      const templateID = 'template_gfrn8fb';
      const publicKey = '3Ypls9oEIkHR_e7zO';

      emailjs.send(serviceID, templateID, this.contactForm.value, publicKey)
        .then(() => {
          this.submissionMessage = 'La tua richiesta è stata inviata con successo!';
          this.contactForm.reset();
        }, (error) => {
          this.submissionMessage = 'Si è verificato un errore, per favore riprova.';
          console.log('Errore nell\'invio:', error);
        });
    } else {
      // Se il form non è valido, mostra un messaggio di errore
      this.submissionMessage = 'Per favore, compila tutti i campi richiesti.';
    }
  }

}