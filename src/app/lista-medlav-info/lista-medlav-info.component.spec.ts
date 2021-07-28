import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedlavInfoComponent } from './lista-medlav-info.component';

describe('ListaMedlavInfoComponent', () => {
  let component: ListaMedlavInfoComponent;
  let fixture: ComponentFixture<ListaMedlavInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMedlavInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMedlavInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
