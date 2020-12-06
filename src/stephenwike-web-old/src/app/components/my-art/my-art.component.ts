import { Component, OnInit } from '@angular/core';
import  *  as  myart  from  './my-art.list.json';

@Component({
  selector: 'app-my-art',
  templateUrl: './my-art.component.html',
  styleUrls: ['./my-art.component.css']
})
export class MyArtComponent implements OnInit {

  artworks = [];

  constructor() { }

  ngOnInit(): void {
    this.artworks = (myart as any).default;
  }

  getUrl(name: string) {
    return `/assets/images/my-art/${name}`;
  } 

}
