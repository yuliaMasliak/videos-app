import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostListener
} from '@angular/core';
import { videoItem } from 'src/app/models/models';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0.8,
          backgroundColor: 'blue'
        })
      ),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.4s')])
    ])
  ]
})
export class ListVideoItemComponent {
  protected showPreview = false;
  isOpen = false;
  @Input() videoItem: videoItem = {
    title: '',
    id: '',
    img: ''
  };
  @Input() counter: number = 0;

  constructor(private route: Router) {}
  @HostListener('mouseenter') onMouseEnter() {
    // this.showPreview = true;
    this.isOpen = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.showPreview = false;
    this.isOpen = false;
  }
  handleClick() {
    this.route.navigate(['/tracks', this.videoItem.id], {
      state: { title: this.videoItem.title }
    });
  }
}

