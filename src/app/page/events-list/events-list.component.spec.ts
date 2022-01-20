import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventService } from 'src/app/service/event.service';

import { EventsListComponent } from './events-list.component';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EventsListComponent,
      ],
      providers: [
        EventService,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('EvnetsListComponent.eventsList should exist', () => {
    expect(component.eventList).toBeDefined();
  });

  it('EvnetsListComponent.eventsList should contain Events', () => {
    expect(component.eventList[0]).toBeDefined();
    expect(component.eventList[0]).toHaveProperty('name');
    expect(component.eventList[0]).toHaveProperty('date');
    expect(component.eventList[0]).toHaveProperty('time');
    expect(component.eventList[0]).toHaveProperty('location');
  });

  it('EvnetsListComponent should create a table', () => {
    const tableRows: HTMLTableRowElement[] = fixture
      .debugElement
      .nativeElement
      .querySelectorAll('table tbody tr');

    fixture.whenStable().then( () => {
      expect(tableRows.length > 2).toBeTruthy();
    });
  });

  it('EvnetsListComponent should create a table', () => {
    const timeCell: HTMLTableCellElement = fixture
      .debugElement
      .nativeElement
      .querySelector('table tbody tr:first-child td:nth-child(3)');

    fixture.whenStable().then( () => {
      expect(timeCell.textContent).toMatch(/10am/);
    });
  });
});
