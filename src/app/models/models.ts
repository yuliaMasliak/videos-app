export interface VideoListResponse {
  kind: string;
  items: videoData[];
}
export interface videoData {
  id: string;
  snippet: snippetData;
}
export interface snippetData {
  localized: { title: string };
  thumbnails: { standard: { url: string } };
}
export interface videoItem {
  title: string;
  id: string;
  img: string;
  url: string;
}
