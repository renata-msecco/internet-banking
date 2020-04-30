import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaSucessoComponent } from './transferencia-sucesso.component';

describe('TransferenciaSucessoComponent', () => {
  let component: TransferenciaSucessoComponent;
  let fixture: ComponentFixture<TransferenciaSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
