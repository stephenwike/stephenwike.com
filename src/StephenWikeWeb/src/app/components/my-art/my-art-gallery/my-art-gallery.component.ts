import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { GalleryManagerService } from 'src/app/services/gallery-manager.service';
import * as myart from '../my-art.component.json';

@Component({
  selector: 'app-my-art-gallery',
  templateUrl: './my-art-gallery.component.html',
  styleUrls: ['./my-art-gallery.component.scss']
})
export class MyArtGalleryComponent implements OnInit {

  galleryService: GalleryManagerService;

  artworks:Image[][];

  constructor(galleryService: GalleryManagerService) { 
    this.galleryService = galleryService;
  }

  ngOnInit(): void {
    let defaultArray: any = (myart as any).default;
    let artArray: Image[] = [];
    defaultArray.forEach(x => artArray.push(new Image(x)));
    this.galleryService.SquaredMargin = 0.15;
    this.galleryService.Max = 5;
    this.galleryService.MaxSquared = 5;
    this.artworks = this.galleryService.BuildGallery(artArray);
    console.log(this.artworks);
  }
}
