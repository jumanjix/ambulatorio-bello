import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedLavDeleteDialogComponent } from './med-lav-delete-dialog.component';

describe('MedLavDeleteDialogComponent', () => {
  let component: MedLavDeleteDialogComponent;
  let fixture: ComponentFixture<MedLavDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedLavDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedLavDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
