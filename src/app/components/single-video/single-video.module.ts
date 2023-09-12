import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: VideoViewerComponent
  }
];
@NgModule({
  declarations: [VideoViewerComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)]
})
export class SingleVideoModule {}

