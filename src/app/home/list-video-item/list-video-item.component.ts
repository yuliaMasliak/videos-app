import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostListener
} from '@angular/core';
import { videoItem } from 'src/app/models/models';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translate(0)', opacity: 0 }),
        animate('300ms', style({ transform: 'scale(100%)', opacity: 1 }))
      ])
    ])
  ]
})
export class ListVideoItemComponent {
  protected showPreview = false;

  @Input() videoItem: videoItem = {
    title: '',
    id: '',
    img: ''
  };
  @Input() counter: number = 0;

  constructor() {}
  @HostListener('mouseenter') onMouseEnter() {
    this.showPreview = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.showPreview = false;
  }
}

