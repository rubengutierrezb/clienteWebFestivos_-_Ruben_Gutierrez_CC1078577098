import { ComponentFixture, TestBed } from '@angular/core/testing';

import { obtenerComponent } from './obtener.component';

describe('obtenerComponent', () => {
  let component: obtenerComponent;
  let fixture: ComponentFixture<obtenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [obtenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(obtenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
