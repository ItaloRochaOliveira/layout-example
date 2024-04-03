import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepcandidatoComponent } from './stepcandidato.component';

describe('StepcandidatoComponent', () => {
  let component: StepcandidatoComponent;
  let fixture: ComponentFixture<StepcandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepcandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepcandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
