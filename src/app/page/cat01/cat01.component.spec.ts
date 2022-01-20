import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat01Component } from './cat01.component';

describe('Cat01Component', () => {
  let component: Cat01Component;
  let fixture: ComponentFixture<Cat01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
