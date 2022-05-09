import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-image',
  templateUrl: './manga-image.component.html',
  styleUrls: ['./manga-image.component.scss']
})
export class MangaImageComponent implements OnInit {
  images: Image[] = [
    {id:0, source:'https://static2.mangapoisk.ru/pages/145/27557/G1Zm5u7h31pxOGqdbhphCGFCZcAGKWv3wwj1bEJ4.jpg'},
    {id:1, source:'https://miro.medium.com/max/2400/2*qU5-Bq-4ExaN5DywQuNzXA.jpeg'}
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
export interface Image{
  id:number
  source:string
}

