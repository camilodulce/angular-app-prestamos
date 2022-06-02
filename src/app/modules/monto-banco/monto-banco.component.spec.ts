import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoBancoComponent } from './monto-banco.component';

describe('MontoBancoComponent', () => {
  let component: MontoBancoComponent;
  let fixture: ComponentFixture<MontoBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontoBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
