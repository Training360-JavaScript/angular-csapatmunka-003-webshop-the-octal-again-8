import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { Event } from '../model/event';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('EventService.getAll should exist', () => {
    expect(service.getAll).toBeTruthy();
  });

  it('EventService.getAll should return three Events', () => {
    const events: Event[] = service.getAll();
    expect(events.length > 2).toBeTruthy();
    expect(events[2]).toHaveProperty('name');
    expect(events[2]).toHaveProperty('date');
    expect(events[2]).toHaveProperty('time');
    expect(events[2]).toHaveProperty('location');
  });
});
