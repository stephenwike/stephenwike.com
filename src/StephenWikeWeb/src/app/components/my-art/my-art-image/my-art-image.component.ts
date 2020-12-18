import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import * as myart from '../my-art.component.json';

@Component({
  selector: 'app-my-art-image',
  templateUrl: './my-art-image.component.html',
  styleUrls: ['./my-art-image.component.scss'],
  animations: [
    trigger('imageContainerExpand', [
      // ...
      state('focused', style({
        width: '100%',
        height: '500px',
        padding: '25px'
      })),
      state('unfocused', style({
        width: '0%',
        height: '250px',
        padding: '0px'
      })),
      transition('focused => unfocused', [
        animate('0.25s')
      ]),
      transition('unfocused => focused', [
        animate('0.25s')
      ]),
    ])
  ]
})
export class MyArtImageComponent {

  @Input() image: Image;
  @Output() closeImage: EventEmitter<void> = new EventEmitter<void>();

  constructor() { 
    this.image = (myart as any).default[0];
  }

  close(): void {
    this.closeImage.emit();
  }

  imageExpandState: string = "unfocused";

  changeFocus(): void {
    this.imageExpandState = (this.imageExpandState == "focused") ? "unfocused" : "focused";
    console.log(this.imageExpandState);
    // if (this.image == null) this.image = (myart as any).default[0];
    // else this.image = null;
  }

}
