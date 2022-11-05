import { TestBed } from '@angular/core/testing';

import { AutomatasService } from './automatas.service';

describe('AutomatasService', () => {
  let service: AutomatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
