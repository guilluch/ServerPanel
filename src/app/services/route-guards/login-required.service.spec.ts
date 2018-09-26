import { TestBed, inject } from '@angular/core/testing';

import { LoginRequired } from './login-required.service';

describe('LoginRequiredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRequired]
    });
  });

  it('should be created', inject([LoginRequired], (service: LoginRequired) => {
    expect(service).toBeTruthy();
  }));
});
