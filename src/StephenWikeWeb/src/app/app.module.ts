import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { MyArtComponent } from './components/my-art/my-art.component';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './components/home/home.component';
import { MyArtGalleryComponent } from './components/my-art/my-art-gallery/my-art-gallery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyArtFilterComponent } from './components/my-art/my-art-filter/my-art-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyArtImageComponent } from './components/my-art/my-art-image/my-art-image.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    MyArtComponent,
    HomeComponent,
    MyArtGalleryComponent,
    MyArtFilterComponent,
    MyArtImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'sw-services.us.auth0.com',
      clientId: 'Re8a71sSqj9nCR7ufVwRafDa89AU7x9b'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
