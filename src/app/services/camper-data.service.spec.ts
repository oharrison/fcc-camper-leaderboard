/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CamperDataService } from './camper-data.service';

describe('CamperDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamperDataService]
    });
  });

  it('should ...', inject([CamperDataService], (service: CamperDataService) => {
    expect(service).toBeTruthy();
  }));
});
