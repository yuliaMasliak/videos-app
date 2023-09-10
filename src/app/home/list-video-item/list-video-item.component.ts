import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVideoItemComponent {
  @Input() title: string = '';
  @Input() counter: number = 0;
  @Input() url: string = '';
  constructor(private router: Router, private data: DataService) {}

  handleClick() {
    this.data.makeUrl(this.url);
    this.goToTrackPage();
  }
  goToTrackPage() {
    this.router.navigate(['home/track']);
  }
}

