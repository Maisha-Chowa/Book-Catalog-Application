export interface IBook {
  _id: number;
  userid:string;
  title: string;
  isbn: string;
  pageCount: number;
  publishedDate: string;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  authors: string[];
  quantity?: number;
  genre: string[];
}
