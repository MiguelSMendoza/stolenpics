import { TestBed, inject } from '@angular/core/testing';

import { PicsService } from './pics.service';

describe('PicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicsService]
    });
  });

  it('should be created', inject([PicsService], (service: PicsService) => {
    expect(service).toBeTruthy();
  }));
});
