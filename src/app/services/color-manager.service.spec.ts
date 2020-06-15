import { TestBed } from '@angular/core/testing';

import { ColorManagerService } from './color-manager.service';

describe('ColorManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorManagerService = TestBed.get(ColorManagerService);
    expect(service).toBeTruthy();
  });
});
