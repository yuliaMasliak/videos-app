import { Component, OnInit, ViewChild } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { videoItem } from '../models/models';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private data: DataService, private router: Router) {}
  ngOnInit(): void {
    this.data.getVideoListFromAPI();
    this.router.navigate(['home/list']);
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getVideoList(): videoItem[] {
    return this.data.videoLinks;
  }
}

