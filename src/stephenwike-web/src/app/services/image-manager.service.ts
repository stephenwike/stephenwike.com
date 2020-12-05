import { Injectable } from '@angular/core';
import { glob } from 'glob';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageManagerService {

  constructor() { }

  GetImages(route: string): Image[] 
  {
    route = "my-art"; // TODO: temp override. remove;

    let images: Image[] = [];

    let imageFiles = this.GetFiles(route);

    return images;
  }

  GetFiles(route: string) {

    glob(route + '/**/*', (err, res) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log(res);
        return res;
      }
    });

  }
}
