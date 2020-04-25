import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTransferenciaComponent } from './PaginaTransferencia.component';

describe('PaginaTransferenciaComponent', () => {
  let component: PaginaTransferenciaComponent;
  let fixture: ComponentFixture<PaginaTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
