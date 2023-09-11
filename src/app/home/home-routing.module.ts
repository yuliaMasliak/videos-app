import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', component: ListContainerComponent },
      {
        path: 'tracks/:id',
        loadChildren: () =>
          import('../single-video/single-video.module').then(
            (m) => m.SingleVideoModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

