import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {
  constructor(private data: DataService, private sanitizer: DomSanitizer) {}
  public videoUrl: SafeResourceUrl = '';
  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data.currentVideo
    );
  }
}

