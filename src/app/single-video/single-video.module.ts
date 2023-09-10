import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VideoViewerComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SingleVideoModule {}

