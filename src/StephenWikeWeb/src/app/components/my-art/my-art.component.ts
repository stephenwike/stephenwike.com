import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { GalleryManagerService } from 'src/app/services/gallery-manager.service';
import * as myart from './my-art.component.json';

@Component({
  selector: 'app-my-art',
  templateUrl: './my-art.component.html',
  styleUrls: ['./my-art.component.scss']
})
export class MyArtComponent implements OnInit {

  topics: string[] = ['Fake', 'Drawings', 'Sketches', 'Paintings', 'Illustrations', 'Other'];
  artworks:Image[];

  constructor(private galleryService: GalleryManagerService) { }

  ngOnInit(): void {
    this.artworks = (myart as any).default;

    //let defaultArray: any = (myart as any).default;
    //let artArray: Image[] = [];
    //defaultArray.forEach(x => artArray.push(new Image(x)));
    
    this.galleryService.SquaredMargin = 0.15;
    this.galleryService.Max = 5;
    this.galleryService.MaxSquared = 5;
    this.galleryService.Images = this.artworks;
    this.topics = this.galleryService.GetTopics();
    this.artworks = this.galleryService.SortBy("Random");
    //this.artworks = this.galleryService.BuildGallery(artArray);
    
    console.log(this.artworks);
  }

  onTopicsChanged(topics: string[]): void {
    this.artworks = this.galleryService.FilterImagesByTopic(topics);
  }

  onSortByChanged(catergory: string): void {
    this.artworks = this.galleryService.SortBy(catergory);
  }
}
