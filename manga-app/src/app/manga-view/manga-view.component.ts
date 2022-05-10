import { Component, OnInit } from '@angular/core';
import {Image} from "../manga-image/manga-image.component";

@Component({
  selector: 'app-manga-view',
  templateUrl: './manga-view.component.html',
  styleUrls: ['./manga-view.component.scss']
})
export class MangaViewComponent implements OnInit {
  images: Image[] = [
    {id:0, source:'https://cm.blazefast.co/02/6f/026fad6739ffeeea226e5012faa313af.jpg'},
    {id:1, source:'https://cm.blazefast.co/a9/15/a9153fd643b548b96631ee00b54cb9dd.jpg'}
  ]
  currentImage:Image = this.images[0]
  constructor() { }

  ngOnInit(): void {
  }

  onNext(event:any):void{
    this.currentImage = this.images.find(x=>x.id == this.currentImage.id+1) ?? this.currentImage
  }

  onBack(event:any):void{
    this.currentImage = this.images.find(x=>x.id == this.currentImage.id-1) ?? this.currentImage
  }

}
