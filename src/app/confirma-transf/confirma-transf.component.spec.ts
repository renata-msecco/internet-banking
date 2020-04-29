import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaTransfComponent } from './confirma-transf.component';

describe('ConfirmaTransfComponent', () => {
  let component: ConfirmaTransfComponent;
  let fixture: ComponentFixture<ConfirmaTransfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmaTransfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaTransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
