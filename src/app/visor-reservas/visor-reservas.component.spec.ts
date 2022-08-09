import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorReservasComponent } from './visor-reservas.component';

describe('VisorReservasComponent', () => {
  let component: VisorReservasComponent;
  let fixture: ComponentFixture<VisorReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
