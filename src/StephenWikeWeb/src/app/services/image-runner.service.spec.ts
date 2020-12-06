import { TestBed } from '@angular/core/testing';

import { ImageRunnerService } from './image-runner.service';

describe('ImageRunnerService', () => {
  let service: ImageRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
