import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {
  public videoUrl: SafeResourceUrl = '';
  public title: string | null = '';
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');

    this.videoUrl = this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${id}`
      );
  }
}

