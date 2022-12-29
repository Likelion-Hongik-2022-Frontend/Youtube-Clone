export interface WrapperProps {
  marginTop?: string;
  marginBottom?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export interface CardProps {
  thumbnailImageUrl?: string;
  profileImageUrl?: string;
  title?: string;
  channelName?: string;
  viewCount?: string;
  time?: string;
}

export interface IVideos {
  etag: string;
  items: any;
  kind: string;
  nextPageToken: string;
  pagInfo: Object;
}

// export interface IVideoItems {
//   etag: string;
//   id: string;
//   kind: string;
//   snippet: Object;
//   statistics: Object;
// }
