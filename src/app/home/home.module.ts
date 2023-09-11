import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ListVideoItemComponent } from './list-container/list-video-item/list-video-item.component';
import { ListContainerComponent } from './list-container/list-container.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, ListVideoItemComponent, ListContainerComponent]
})
export class HomePageModule {}

