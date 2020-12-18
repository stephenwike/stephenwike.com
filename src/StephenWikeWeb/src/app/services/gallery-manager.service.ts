import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryManagerService {

  private maxLandscape: number = 3;
  private maxPortrait: number = 4;
  private maxSquared: number = 4;

  Max: number = 4;
  SquaredMargin: number = 0.05;
  RandomImageOrder: boolean = true;
  RandomRowOrder: boolean = true;
  Images: Image[];

  set MaxLandscape(val: number) {
    this.maxLandscape = val;
  }
  get MaxLandscape() {
    if(this.Max < this.maxLandscape) return this.Max;
    return this.maxLandscape;
  }

  set MaxPortrait(val: number) {
    this.maxPortrait = val;
  }
  get MaxPortrait() {
    if(this.Max < this.maxPortrait) return this.Max;
    return this.maxPortrait;
  }

  set MaxSquared(val: number) {
    this.maxSquared = val;
  }
  get MaxSquared() {
    if(this.Max < this.maxSquared) return this.Max;
    return this.maxSquared;
  }

  constructor() { }

  GetTopics() {
    let topics: string[] = this.Images.map(x => x.Topic);
    let uniqueTopics: string[] = topics.filter((item, i, ar) => ar.indexOf(item) === i);
    return uniqueTopics;
  }

  FilterImagesByTopic(topics: string[]): Image[] {
    return this.Images.filter(x => topics.indexOf(x.Topic) !== -1);
  }

  SortBy(catergory: string): Image[] {
    switch(catergory)
    {
      case "Newest": {
        return this.Images //Not yet supported //.sort(x => x.Created);
      }
      case "Oldest": {
        return this.Images //Not yet supported //.sort(x => x.Created).reverse();
      }
      case "Topic": {
        let sortedArray = this.Images.sort((a, b) => {
          if(a.Topic < b.Topic) { return -1; }
          if(a.Topic > b.Topic) { return 1; }
          return 0;});
        return sortedArray;
      }
      case "Random": {
        return this.Shuffle(this.Images);
      }
    }
    return this.Images;
  }

  BuildGallery(images: Image[]): Image[][] {
    let imgGrid: Image[][] = [];

    if (this.RandomImageOrder) images = this.Shuffle(images);

    let portraitImages: Image[] = images.filter(img => img.AspectRatio > (1 + this.SquaredMargin));
    let squaredImages: Image[] = images.filter(img => (img.AspectRatio <= (1 + this.SquaredMargin) && img.AspectRatio >= (1 - this.SquaredMargin)));
    let landscapeImages: Image[] = images.filter(img => img.AspectRatio < (1 - this.SquaredMargin));

    let portraitArray: Image[][] = this.GetSubArrays(portraitImages, this.MaxPortrait);
    let squaredArray: Image[][] = this.GetSubArrays(squaredImages, this.MaxSquared);
    let landscapeArray: Image[][] = this.GetSubArrays(landscapeImages, this.MaxLandscape);

    if (portraitArray.length > 0) imgGrid = this.ConcatArray(imgGrid, portraitArray);
    if (squaredArray.length > 0) imgGrid = this.ConcatArray(imgGrid, squaredArray);
    if (landscapeArray.length > 0) imgGrid = this.ConcatArray(imgGrid, landscapeArray);

    if (this.RandomRowOrder) imgGrid = this.Shuffle(imgGrid);

    return  imgGrid;
  }

  private GetSubArrays(images: Image[], chunkSize: number): Image[][] {
    let imgArray: Image[][] = [];
    if (images.length == 0) return imgArray;

    // Get balanced chunck sizes
    let expectedRows = Math.ceil(images.length / chunkSize);
    let largestChunkSize = Math.ceil(images.length / expectedRows);
    let remainder = images.length % largestChunkSize;
    let rowsAffected = largestChunkSize - (remainder === 0? largestChunkSize : remainder);
    let rowsUnaffected = expectedRows - rowsAffected;

    var index = 0;
    for(index; index < rowsUnaffected*largestChunkSize; index+=largestChunkSize)
    {
      let subArray: Image[] = images.slice(index, index+largestChunkSize);
      imgArray.push(subArray);
    }

    --largestChunkSize

    for(index; index < images.length; index+=largestChunkSize)
    {
      let subArray: Image[] = images.slice(index, index+largestChunkSize);
      imgArray.push(subArray);
    }
    return imgArray;
  }

  private ConcatArray(root: Image[][], imgGrid: Image[][]): Image[][] {
    imgGrid.forEach(imgRow => {
      root.push(imgRow);
    })
    return root;
  }

  private Shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    if (currentIndex === NaN) return;
    if (currentIndex === undefined) return;
    if (currentIndex === null) return;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
