import { IBook } from "../types/globalTypes";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const navigate = useNavigate(); // Move this line outside the function

  const handleNavigation = (book: IBook) => {
    const id = book._id;
    console.log(id);
    navigate(`/books/${id}`);
  };

  return (
    <div>
      <div className="rounded-2xl h-[580px]  flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img src={book?.thumbnailUrl} className="w-full" alt="book" />
          <h1 className="text-xl font-semibold">Title: {book?.title}</h1>
        </Link>
        <p className="text-xl">Authors: {book?.authors[0]}...</p>
        <p className="text-xl">Genre: {book?.genre[0]}</p>
        <p className="text-xl">Publication Date: {book?.publishedDate}</p>
        <Button
          variant="default"
          className="bg-teal-300 rounded-xl"
          onClick={() => handleNavigation(book)}
        >
          Book Details
        </Button>
      </div>
    </div>
  );
}

// import { IBook } from "../types/globalTypes";
// // import { toast } from './ui/use-toast';
// import { Button } from "./ui/button";
// import { Link, useNavigate, useParams } from "react-router-dom";

// interface IProps {
//   book: IBook;
// }
// export default function BookCard({ book }: IProps) {
//   // console.log(book);
//   const handleNavigation = (book: IBook) => {
//     const id = book._id;
//     console.log(id);
//     const navigate = useNavigate();
//     navigate(`/book-details/${id}`);
//   };

//   return (
//     <div>
//       <div className="rounded-2xl h-[580px]  flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
//         <Link to={`/book-details/${book._id}`} className="w-full">
//           <img src={book?.thumbnailUrl} className="w-full" alt="book" />
//           <h1 className="text-xl font-semibold">Title: {book?.title}</h1>
//         </Link>
//         <p className="text-xl">Authors: {book?.authors[0]}...</p>
//         <p className="text-xl">Genre: {book?.genre[0]}</p>
//         {/* <p className="text-xl">Publication Date: {book?.publishedDate}</p> */}
//         <Button
//           variant="default"
//           className="bg-teal-300 rounded-xl"
//           onClick={() => handleNavigation(book)}
//         >
//           Book Details
//         </Button>
//       </div>
//     </div>
//   );
// }
