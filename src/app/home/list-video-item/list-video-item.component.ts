import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVideoItemComponent {
  @Input() title: string = '';
  @Input() counter: number = 0;
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['track']);
  }
}

