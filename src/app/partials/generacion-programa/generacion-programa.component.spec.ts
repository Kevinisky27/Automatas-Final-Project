import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionProgramaComponent } from './generacion-programa.component';

describe('GeneracionProgramaComponent', () => {
  let component: GeneracionProgramaComponent;
  let fixture: ComponentFixture<GeneracionProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneracionProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneracionProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
