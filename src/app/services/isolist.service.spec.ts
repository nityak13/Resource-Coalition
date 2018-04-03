import { TestBed, inject } from '@angular/core/testing';

import { IsolistService } from './isolist.service';

describe('IsolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsolistService]
    });
  });

  it('should be created', inject([IsolistService], (service: IsolistService) => {
    expect(service).toBeTruthy();
  }));
});
