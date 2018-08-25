import { TestBed, inject } from '@angular/core/testing';

import { EmitFilterValuesService } from './emit-filter-values.service';

describe('EmitFilterValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitFilterValuesService]
    });
  });

  it('should be created', inject([EmitFilterValuesService], (service: EmitFilterValuesService) => {
    expect(service).toBeTruthy();
  }));
});
