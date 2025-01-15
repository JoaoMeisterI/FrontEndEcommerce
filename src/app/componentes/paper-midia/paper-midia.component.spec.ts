import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperMidiaComponent } from './paper-midia.component';

describe('PaperMidiaComponent', () => {
  let component: PaperMidiaComponent;
  let fixture: ComponentFixture<PaperMidiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperMidiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaperMidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
