import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../components/app/app.component';
import { HomeComponent } from '../components/home/home.component';
import { MyArtGalleryComponent } from '../components/my-art/my-art-gallery/my-art-gallery.component';
import { MyArtImageComponent } from '../components/my-art/my-art-image/my-art-image.component';
import { MyArtComponent } from '../components/my-art/my-art.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'art', component: MyArtComponent },
  { path: 'art/gallery', component: MyArtGalleryComponent },
  { path: 'art/image', component: MyArtImageComponent },
  { path: 'signin-callback', component: HomeComponent },
  { path: 'signout-callback', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
