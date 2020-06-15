import { TestBed } from '@angular/core/testing';

import { SideChoiseService } from './side-choise.service';

describe('SideChoiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideChoiseService = TestBed.get(SideChoiseService);
    expect(service).toBeTruthy();
  });
});
