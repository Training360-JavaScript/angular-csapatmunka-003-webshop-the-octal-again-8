import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat02Component } from './cat02.component';

describe('Cat02Component', () => {
  let component: Cat02Component;
  let fixture: ComponentFixture<Cat02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
