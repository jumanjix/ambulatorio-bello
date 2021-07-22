import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAnalisiComponent } from './lab-analisi.component';

describe('LabAnalisiComponent', () => {
  let component: LabAnalisiComponent;
  let fixture: ComponentFixture<LabAnalisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAnalisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAnalisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
