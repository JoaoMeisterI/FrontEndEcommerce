import { ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriasComponent } from './categorias.component';

describe('FavoritosComponent', () => {
  let component: categoriasComponent;
  let fixture: ComponentFixture<categoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [categoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(categoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
