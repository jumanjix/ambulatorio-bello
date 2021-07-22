import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaLavoroComponent } from './medicina-lavoro.component';

describe('MedicinaLavoroComponent', () => {
  let component: MedicinaLavoroComponent;
  let fixture: ComponentFixture<MedicinaLavoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinaLavoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinaLavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
