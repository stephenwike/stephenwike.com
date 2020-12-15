import { not } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';
import { Image } from '../models/image.model';

import { GalleryManagerService } from './gallery-manager.service';
import { TestStage } from './gallery-manager.service.test-helpers';

describe('Service.GalleryManager', () => {
  let service: GalleryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createGallery', ()=> {
    it('should have default global max', () => {
      expect(service.Max).toBe(4);
    });

    it('should have default landscape max', () => {
      expect(service.MaxLandscape).toBe(3);
    });

    it('should have default portrait max', () => {
      expect(service.MaxPortrait).toBe(4);
    });

    it('should have default squared max', () => {
      expect(service.MaxSquared).toBe(4);
    });

    it('should have default squared margin', () => {
      expect(service.SquaredMargin).toBe(0.05);
    });

    it('should have default random image order', () => {
      expect(service.RandomImageOrder).toBeTrue();
    });

    it('should have default random image order', () => {
      expect(service.RandomRowOrder).toBeTrue();
    });
    
    it('should separate images into rows by orientation', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Width: 700, Height: 400 }),
        new Image({ Width: 300, Height: 500 }),
        new Image({ Width: 400, Height: 400 }),
        new Image({ Width: 500, Height: 500 }),
        new Image({ Width: 400, Height: 700 }),
        new Image({ Width: 500, Height: 300 }),
      ]

      service.SquaredMargin = 0;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(3);
      expect(gallery[0].length).toBe(2);
      expect(gallery[1].length).toBe(2);
      expect(gallery[2].length).toBe(2);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(1);
      expect(testStage.SquaredRows).toBe(1);
      expect(testStage.PortraitRows).toBe(1);
    });

    it('should not exceed global max for any local max', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Width: 700, Height: 400 }),
        new Image({ Width: 300, Height: 500 }),
        new Image({ Width: 400, Height: 400 }),
        new Image({ Width: 500, Height: 500 }),
        new Image({ Width: 400, Height: 700 }),
        new Image({ Width: 500, Height: 300 }),
      ]

      service.Max = 1;
      service.MaxLandscape = 2;
      service.MaxPortrait = 2;
      service.MaxSquared = 2;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(6);
      gallery.forEach(x => expect(x.length).toBe(1));

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(2);
      expect(testStage.SquaredRows).toBe(2);
      expect(testStage.PortraitRows).toBe(2);
    });

    it('should separate images into squared orientation if within margin', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Width: 600, Height: 600 }),
        new Image({ Width: 300, Height: 450 }),
        new Image({ Width: 600, Height: 300 })
      ]

      service.RandomImageOrder = false; // the first in the row has to evaluate to aspect ratio = 1
      service.SquaredMargin = 0.5;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(1);
      expect(gallery[0].length).toBe(3);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(0);
      expect(testStage.SquaredRows).toBe(1);
      expect(testStage.PortraitRows).toBe(0);
    });

    it('should create portrait images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
      ]
      
      service.MaxPortrait = 1;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(1);
      expect(gallery[1].length).toBe(1);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.PortraitRows).toBe(2);
    });

    it('should create squared images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 400, Width: 400 }),
        new Image({ Height: 400, Width: 400 })
      ]
      
      service.MaxSquared = 1;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(1);
      expect(gallery[1].length).toBe(1);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.SquaredRows).toBe(2);
    });

    it('should create landscape images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 300, Width: 400 }),
        new Image({ Height: 300, Width: 400 }),
      ]
      
      service.MaxLandscape = 1;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(1);
      expect(gallery[1].length).toBe(1);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(2);
    });

    it('should balance portrait images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 })
      ]
      
      service.RandomRowOrder = false;
      service.MaxPortrait = 4;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(3);
      expect(gallery[1].length).toBe(2);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.PortraitRows).toBe(2);
    });

    it('should balance large sets of portrait images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 })
      ]
      
      service.RandomRowOrder = false;
      service.MaxPortrait = 4;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(5);
      expect(gallery[0].length).toBe(4);
      expect(gallery[1].length).toBe(4);
      expect(gallery[2].length).toBe(3);
      expect(gallery[3].length).toBe(3);
      expect(gallery[4].length).toBe(3);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.PortraitRows).toBe(5);
    });

    it('should balance sets of portrait images over large max lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 }),
        new Image({ Height: 400, Width: 300 })
      ]
      
      service.RandomRowOrder = false;
      service.Max = 8;
      service.MaxPortrait = 8;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(7);
      expect(gallery[1].length).toBe(6);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.PortraitRows).toBe(2);
    });

    it('should balance squared images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 400, Width: 400 }),
        new Image({ Height: 400, Width: 400 }),
        new Image({ Height: 400, Width: 400 }),
        new Image({ Height: 400, Width: 400 }),
        new Image({ Height: 400, Width: 400 })
      ]
      
      service.MaxSquared = 4;
      service.RandomRowOrder = false;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(3);
      expect(gallery[1].length).toBe(2);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.SquaredRows).toBe(2);
    });

    it('should balance landscape images over multiple lines', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Height: 300, Width: 400 }),
        new Image({ Height: 300, Width: 400 }),
        new Image({ Height: 300, Width: 400 }),
        new Image({ Height: 300, Width: 400 }),
        new Image({ Height: 300, Width: 400 })
      ]
      
      service.RandomRowOrder = false;
      service.MaxSquared = 4;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(2);
      expect(gallery[0].length).toBe(3);
      expect(gallery[1].length).toBe(2);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(2);
    });

    it('should randomized the image order by default', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Title: "1", Width: 700, Height: 400 }),
        new Image({ Title: "2", Width: 700, Height: 400 }),
        new Image({ Title: "3", Width: 700, Height: 400 }),
        new Image({ Title: "4", Width: 700, Height: 400 }),
        new Image({ Title: "5", Width: 700, Height: 400 }),
        new Image({ Title: "6", Width: 700, Height: 400 }),
        new Image({ Title: "7", Width: 700, Height: 400 }),
        new Image({ Title: "8", Width: 700, Height: 400 }),
        new Image({ Title: "9", Width: 700, Height: 400 }),
        new Image({ Title: "10", Width: 700, Height: 400 }),
        new Image({ Title: "11", Width: 700, Height: 400 }),
        new Image({ Title: "12", Width: 700, Height: 400 })
      ]
      let expected = images.map(x => x.Title).toString();

      service.SquaredMargin = 0;
      service.Max = 12;
      service.MaxLandscape = 12;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(1);
      expect(gallery[0].length).toBe(12);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(1);

      let actual = gallery[0].map(x => x.Title).toString();
      expect(actual).not.toEqual(expected);
    });

    it('should not randomized the image order in random image order false', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Title: "1", Width: 700, Height: 400 }),
        new Image({ Title: "2", Width: 700, Height: 400 }),
        new Image({ Title: "3", Width: 700, Height: 400 }),
        new Image({ Title: "4", Width: 700, Height: 400 }),
        new Image({ Title: "5", Width: 700, Height: 400 }),
        new Image({ Title: "6", Width: 700, Height: 400 }),
        new Image({ Title: "7", Width: 700, Height: 400 }),
        new Image({ Title: "8", Width: 700, Height: 400 }),
        new Image({ Title: "9", Width: 700, Height: 400 }),
        new Image({ Title: "10", Width: 700, Height: 400 }),
        new Image({ Title: "11", Width: 700, Height: 400 }),
        new Image({ Title: "12", Width: 700, Height: 400 })
      ]
      let expected = images.map(x => x.Title).toString();

      service.SquaredMargin = 0;
      service.Max = 12;
      service.MaxLandscape = 12;
      service.RandomImageOrder = false;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(1);
      expect(gallery[0].length).toBe(12);

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(1);

      let actual = gallery[0].map(x => x.Title).toString();
      expect(actual).toEqual(expected);
    });

    it('should randomized the row order by default', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Title: "1", Width: 700, Height: 300 }),
        new Image({ Title: "2", Width: 700, Height: 300 }),
        new Image({ Title: "3", Width: 700, Height: 300 }),
        new Image({ Title: "4", Width: 700, Height: 300 }),
        new Image({ Title: "5", Width: 700, Height: 700 }),
        new Image({ Title: "6", Width: 700, Height: 700 }),
        new Image({ Title: "7", Width: 700, Height: 700 }),
        new Image({ Title: "8", Width: 700, Height: 700 }),
        new Image({ Title: "9", Width: 300, Height: 700 }),
        new Image({ Title: "10", Width: 300, Height: 700 }),
        new Image({ Title: "11", Width: 300, Height: 700 }),
        new Image({ Title: "12", Width: 300, Height: 700 })
      ]

      service.SquaredMargin = 0;
      service.Max = 1;
      service.MaxLandscape = 1;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(12);
      gallery.forEach(x => expect(x.length).toBe(1));

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(4);
      expect(testStage.PortraitRows).toBe(4);
      expect(testStage.SquaredRows).toBe(4);

      let actual = testStage.FriendlyOrientationRowOrder(gallery);
      let expected = 'p,p,p,p,s,s,s,s,l,l,l,l';
      expect(actual).not.toEqual(expected);
    });

    it('should randomized the row order by default', () => {
      let testStage: TestStage = new TestStage();
      let images: Image[] = [
        new Image({ Title: "1", Width: 700, Height: 300 }),
        new Image({ Title: "2", Width: 700, Height: 300 }),
        new Image({ Title: "3", Width: 700, Height: 300 }),
        new Image({ Title: "4", Width: 700, Height: 300 }),
        new Image({ Title: "5", Width: 700, Height: 700 }),
        new Image({ Title: "6", Width: 700, Height: 700 }),
        new Image({ Title: "7", Width: 700, Height: 700 }),
        new Image({ Title: "8", Width: 700, Height: 700 }),
        new Image({ Title: "9", Width: 300, Height: 700 }),
        new Image({ Title: "10", Width: 300, Height: 700 }),
        new Image({ Title: "11", Width: 300, Height: 700 }),
        new Image({ Title: "12", Width: 300, Height: 700 })
      ]

      service.RandomRowOrder = false;
      service.SquaredMargin = 0;
      service.Max = 1;
      service.MaxLandscape = 1;
      let gallery = service.BuildGallery(images);
      expect(gallery.length).toBe(12);
      gallery.forEach(x => expect(x.length).toBe(1));

      testStage.AssertOrientationPerRow(gallery);
      expect(testStage.LandscapeRows).toBe(4);
      expect(testStage.PortraitRows).toBe(4);
      expect(testStage.SquaredRows).toBe(4);

      let actual = testStage.FriendlyOrientationRowOrder(gallery);
      let expected = 'p,p,p,p,s,s,s,s,l,l,l,l';
      expect(actual).toEqual(expected);
    });
  });
});
