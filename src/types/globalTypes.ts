export interface IBook {
  _id: number;
  title: string;
  isbn: string;
  pageCount: number;
  price: number;
  publishedDate: {
    $date: string;
  };
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  rating: number;
  authors: string[];
  quantity?: number;
  genre: string[];
}
