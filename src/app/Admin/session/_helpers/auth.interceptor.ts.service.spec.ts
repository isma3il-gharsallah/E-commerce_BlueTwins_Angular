import { TestBed } from '@angular/core/testing';

import { Auth.Interceptor.TsService } from './auth.interceptor.ts.service';

describe('Auth.Interceptor.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.Interceptor.TsService = TestBed.get(Auth.Interceptor.TsService);
    expect(service).toBeTruthy();
  });
});
