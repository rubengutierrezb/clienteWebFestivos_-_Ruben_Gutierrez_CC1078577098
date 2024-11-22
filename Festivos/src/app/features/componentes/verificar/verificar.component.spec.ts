import { ComponentFixture, TestBed } from '@angular/core/testing';

import { verificarComponent } from './verificar.component';

describe('verificarComponent', () => {
  let component: verificarComponent;
  let fixture: ComponentFixture<verificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [verificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(verificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
