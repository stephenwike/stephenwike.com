import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-my-art-gallery',
  templateUrl: './my-art-gallery.component.html',
  styleUrls: ['./my-art-gallery.component.scss'],
  animations: [
    trigger('imageContainerExpand', [
      // ...
      state('focused', style({
        width: '100%',
        height: '400px',
        padding: '25px'
      })),
      state('unfocused', style({
        height: '250px',
        padding: '0px'
      })),
      transition('focused => unfocused', [
        animate('0s')
      ]),
      transition('unfocused => focused', [
        animate('0.25s')
      ]),
    ])
  ]
})
export class MyArtGalleryComponent {
  @Input() artworks: Image[];
  image: Image = null;

  display(image: Image): void {
    this.image = image;
  }

  isFocused(image: Image): string {
    return (this.image === image) ? "focused" : "unfocused"
  }
}
