import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferindoComponent } from './transferindo.component';

describe('TransferindoComponent', () => {
  let component: TransferindoComponent;
  let fixture: ComponentFixture<TransferindoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferindoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
