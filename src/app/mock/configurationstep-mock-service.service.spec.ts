import { TestBed } from '@angular/core/testing';

import { ConfigurationstepMockServiceService } from './configurationstep-mock-service.service';

describe('ConfigurationstepMockServiceService', () => {
  let service: ConfigurationstepMockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationstepMockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
