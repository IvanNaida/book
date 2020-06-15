import { TestBed } from '@angular/core/testing';

import { SizeManagerService } from './size-manager.service';

describe('SizeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeManagerService = TestBed.get(SizeManagerService);
    expect(service).toBeTruthy();
  });
});
