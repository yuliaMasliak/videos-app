import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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

