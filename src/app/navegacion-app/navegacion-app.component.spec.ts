import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionAppComponent } from './navegacion-app.component';

describe('NavegacionAppComponent', () => {
  let component: NavegacionAppComponent;
  let fixture: ComponentFixture<NavegacionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
