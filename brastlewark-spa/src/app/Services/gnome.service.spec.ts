import { TestBed } from '@angular/core/testing';

import { GnomeService } from './gnome.service';

describe('GnomesService', () => {
  let service: GnomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
