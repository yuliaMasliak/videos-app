import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { videoItem } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';
import { ListVideoItemComponent } from '../list-video-item/list-video-item.component';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent {
  constructor(private data: DataService) {}

  getVideoList(): videoItem[] {
    return this.data.videoLinks;
  }
}

