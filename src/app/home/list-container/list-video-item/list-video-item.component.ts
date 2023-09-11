import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVideoItemComponent {
  public showPreview = false;
  @Input() title: string = '';
  @Input() counter: number = 0;
  @Input() id: string = '';
  @Input() img: string = '';
  @Input() url: string = '';
  constructor(private router: Router, private data: DataService) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.showPreview = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.showPreview = false;
  }
  handleClick() {
    this.data.makeUrl(this.id);
    this.goToTrackPage();
  }
  goToTrackPage() {
    this.router.navigate(['home/track']);
  }
}

