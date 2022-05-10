import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-manga-image',
  templateUrl: './manga-image.component.html',
  styleUrls: ['./manga-image.component.scss']
})
export class MangaImageComponent implements OnInit {
  @Input() image: Image = {id:0, source:''}
  constructor() { }

  ngOnInit(): void {
  }
}
export interface Image{
  id:number
  source:string
}

