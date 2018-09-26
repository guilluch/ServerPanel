import { TestBed, inject } from '@angular/core/testing';

import { GuestRequired } from './guest-required.service';

describe('GuestRequiredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestRequired]
    });
  });

  it('should be created', inject([GuestRequired], (service: GuestRequired) => {
    expect(service).toBeTruthy();
  }));
});
