import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-video-item',
  templateUrl: './list-video-item.component.html',
  styleUrls: ['./list-video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVideoItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

