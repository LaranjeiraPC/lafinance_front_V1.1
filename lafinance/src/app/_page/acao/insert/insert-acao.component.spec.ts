import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAcaoComponent } from './insert-acao.component';

describe('InsertAcaoComponent', () => {
  let component: InsertAcaoComponent;
  let fixture: ComponentFixture<InsertAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
