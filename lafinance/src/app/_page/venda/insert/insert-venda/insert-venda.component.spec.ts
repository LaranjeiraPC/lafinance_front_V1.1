import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVendaComponent } from './insert-venda.component';

describe('InsertVendaComponent', () => {
  let component: InsertVendaComponent;
  let fixture: ComponentFixture<InsertVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
