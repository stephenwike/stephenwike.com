import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryManagerService } from 'src/app/services/gallery-manager.service';

import { MyArtGalleryComponent } from './my-art-gallery.component';

describe('Component.MyArtGallery', () => {
  let component: MyArtGalleryComponent;
  let fixture: ComponentFixture<MyArtGalleryComponent>;
  let MockGalleryManagerService = jasmine.createSpyObj(['BuildGallery']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArtGalleryComponent ],
      providers: [ {provide: GalleryManagerService, useValue: MockGalleryManagerService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArtGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
