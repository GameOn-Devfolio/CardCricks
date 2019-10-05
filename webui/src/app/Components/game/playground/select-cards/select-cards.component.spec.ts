import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCardsComponent } from './select-cards.component';

describe('SelectCardsComponent', () => {
  let component: SelectCardsComponent;
  let fixture: ComponentFixture<SelectCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
