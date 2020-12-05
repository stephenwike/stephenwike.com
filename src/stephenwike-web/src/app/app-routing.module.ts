import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyArtComponent } from './components/my-art/my-art.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: 'art', component: MyArtComponent },
  { path: '', component: OpenCloseComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
