import { TestBed } from '@angular/core/testing';

import { NetworkInterceptorInterceptor } from './network-interceptor.interceptor';

describe('NetworkInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NetworkInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NetworkInterceptorInterceptor = TestBed.inject(NetworkInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
