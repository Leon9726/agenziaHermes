import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioServizioComponent } from './dettaglio-servizio.component';

describe('DettaglioServizioComponent', () => {
  let component: DettaglioServizioComponent;
  let fixture: ComponentFixture<DettaglioServizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioServizioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioServizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
