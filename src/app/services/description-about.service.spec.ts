import { TestBed } from '@angular/core/testing';

import { DescriptionAboutService } from './description-about.service';

describe('DescriptionAboutService', () => {
  let service: DescriptionAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
