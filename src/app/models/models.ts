export interface VideoListResponse {
  kind: string;
  items: videoData[];
}
export interface videoData {
  kind: string;
  snippet: snippetData;
}
export interface snippetData {
  localized: { title: string };
  thumbnails: { standard: { url: string } };
}
export interface videoItem {
  title: string;
  url: string;
}
