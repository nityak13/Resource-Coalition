import { TestBed, inject } from '@angular/core/testing';

import { StatuslistService } from './statuslist.service';

describe('StatuslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatuslistService]
    });
  });

  it('should be created', inject([StatuslistService], (service: StatuslistService) => {
    expect(service).toBeTruthy();
  }));
});
