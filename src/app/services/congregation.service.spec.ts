/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CongregationService } from './congregation.service';

describe('CongregationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CongregationService]
    });
  });

  it('should ...', inject([CongregationService], (service: CongregationService) => {
    expect(service).toBeTruthy();
  }));
});
