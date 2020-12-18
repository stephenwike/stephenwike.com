import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-my-art-gallery',
  templateUrl: './my-art-gallery.component.html',
  styleUrls: ['./my-art-gallery.component.scss']
})
export class MyArtGalleryComponent {
  @Input() artworks: Image[];
  image: Image = null;

  display(image: Image): void {
    this.image = image;
  }

  onCloseImage(): void {
    this.image = null;
  }
}
