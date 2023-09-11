import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoListResponse, videoItem } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASE_URL = 'https://www.googleapis.com/youtube/v3/';
  private API_KEY = 'AIzaSyA9z6ja0l_9m3Xv7jUw8sf35P2Z4nXc03A';
  public videoLinks: videoItem[] = [];
  public currentVideo: string = '';

  constructor(private http: HttpClient) {}

  public getVideoListFromAPI(): void {
    this.http
      .get<VideoListResponse>(
        `${this.BASE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${this.API_KEY}`
      )
      .subscribe((data) => {
        data.items.forEach((element) => {
          const item = {
            title: element.snippet.localized.title,
            id: element.id,
            img: element.snippet.thumbnails.standard.url
          };

          this.videoLinks.push(item);
        });
      });
  }

  public getVideoListFromService(): videoItem[] {
    return this.videoLinks;
  }
  public makeUrl(id: string) {
    this.currentVideo = `https://www.youtube.com/embed/${id}`;
  }
}

