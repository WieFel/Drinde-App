import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillPage } from './refill.page';

describe('RefillPage', () => {
  let component: RefillPage;
  let fixture: ComponentFixture<RefillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
