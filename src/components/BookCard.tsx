import { IBook } from "../types/globalTypes";
// import { toast } from './ui/use-toast';
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

const handleBookDetails =() =>{

}

export default function BookCard({ book }: IProps) {
  console.log(book);

  return (
    <div>
      <div className="rounded-2xl h-[550px]  flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book/${book._id}`} className="w-full">
          <img src={book?.thumbnailUrl} className="w-full" alt="book" />
          <h1 className="text-xl font-semibold">Title: {book?.title}</h1>
        </Link>
        <p className="text-xl">Authors: {book?.authors[0]}...</p>
        <p className="text-xl">Genre: {book?.genre[0]}</p>
        <p className="text-xl">Publication Date: {book?.publishedDate}</p>
        <Button variant="default" onClick={() => handleBookDetails()}>
          Book Details
        </Button>
      </div>
    </div>
  );
}
