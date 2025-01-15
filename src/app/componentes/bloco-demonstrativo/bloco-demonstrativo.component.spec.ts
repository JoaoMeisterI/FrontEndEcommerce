import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoDemonstrativoComponent } from './bloco-demonstrativo.component';

describe('BlocoDemonstrativoComponent', () => {
  let component: BlocoDemonstrativoComponent;
  let fixture: ComponentFixture<BlocoDemonstrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoDemonstrativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocoDemonstrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
