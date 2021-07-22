import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioniSsnComponent } from './prenotazioni-ssn.component';

describe('PrenotazioniSsnComponent', () => {
  let component: PrenotazioniSsnComponent;
  let fixture: ComponentFixture<PrenotazioniSsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenotazioniSsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioniSsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
