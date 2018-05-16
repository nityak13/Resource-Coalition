import { TestBed, inject } from '@angular/core/testing';

import { PropertySharingService } from './property-sharing.service';

describe('PropertySharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertySharingService]
    });
  });

  it('should be created', inject([PropertySharingService], (service: PropertySharingService) => {
    expect(service).toBeTruthy();
  }));
});
