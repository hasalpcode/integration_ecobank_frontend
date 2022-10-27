import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcobankComponent } from './ecobank.component';

describe('EcobankComponent', () => {
  let component: EcobankComponent;
  let fixture: ComponentFixture<EcobankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcobankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcobankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
