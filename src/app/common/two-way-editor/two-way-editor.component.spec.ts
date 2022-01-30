import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayEditorComponent } from './two-way-editor.component';

describe('TwoWayEditorComponent', () => {
  let component: TwoWayEditorComponent;
  let fixture: ComponentFixture<TwoWayEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
