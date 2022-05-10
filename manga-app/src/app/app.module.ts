import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaImageComponent } from './manga-image/manga-image.component';
import { MangaViewComponent } from './manga-view/manga-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaImageComponent,
    MangaViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
