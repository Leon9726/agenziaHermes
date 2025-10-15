import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiDettaglioComponent } from './contatti-dettaglio.component';

describe('ContattiDettaglioComponent', () => {
  let component: ContattiDettaglioComponent;
  let fixture: ComponentFixture<ContattiDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattiDettaglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
