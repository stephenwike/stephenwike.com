import { TestBed } from '@angular/core/testing';

import { FileManagerService } from './file-manager.service';

describe('FileManagerService', () => {
  let service: FileManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve files', () => {
    var files = service.getFiles("test");
    expect(files.length).toEqual(1);
  });
});
