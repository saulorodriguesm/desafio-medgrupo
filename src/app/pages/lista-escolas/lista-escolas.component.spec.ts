import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEscolasComponent } from './lista-escolas.component';

describe('ListaEscolasComponent', () => {
  let component: ListaEscolasComponent;
  let fixture: ComponentFixture<ListaEscolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEscolasComponent]
    });
    fixture = TestBed.createComponent(ListaEscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
