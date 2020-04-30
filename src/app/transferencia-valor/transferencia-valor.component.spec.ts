import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaValorComponent } from './transferencia-valor.component';

describe('TransferenciaValorComponent', () => {
  let component: TransferenciaValorComponent;
  let fixture: ComponentFixture<TransferenciaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
