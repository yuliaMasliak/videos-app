import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {
  public videoUrl: SafeResourceUrl = '';
  public title: string | null = '';
  constructor(
    private data: DataService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const verifiedId = this.data.videoLinks.find((element) => {
      return element.id === id;
    });
    if (verifiedId) {
      const navigationExtras =
        this.router.getCurrentNavigation()?.extras.state || null;

      if (navigationExtras && navigationExtras.title) {
        this.title = navigationExtras.title;
      } else {
        this.title = '';
      }
      this.videoUrl = this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${id}`
        );
    } else {
      this.router.navigate(['not-found']);
    }
  }
}

