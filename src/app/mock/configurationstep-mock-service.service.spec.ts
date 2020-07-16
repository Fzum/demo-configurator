import { TestBed } from '@angular/core/testing';

import { ConfigurationstepMockService } from './configurationstep-mock-service.service';

describe('ConfigurationstepMockServiceService', () => {
  let service: ConfigurationstepMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationstepMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
