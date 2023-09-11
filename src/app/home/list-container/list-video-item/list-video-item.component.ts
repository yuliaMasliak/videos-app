import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { videoItem } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVideoItemComponent {
  protected showPreview = false;

  @Input() videoItem: videoItem = {
    title: '',
    id: '',
    img: ''
  };
  @Input() counter: number = 0;

  constructor(private router: Router, private data: DataService) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.showPreview = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.showPreview = false;
  }
  handleClick() {
    this.router.navigate(['home/track', this.videoItem.id]);
  }
}

