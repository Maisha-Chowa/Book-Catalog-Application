import { IBook } from "../types/globalTypes";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data);
  let productsData = data?.data;
  console.log(productsData);
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]"></div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {productsData?.slice(0, 9)?.map((book: IBook) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <Button
          variant="default"
          className="bg-teal-300 p-5 text-2xl font-se rounded-xl"
          onClick={() => navigate(`/books`)}
        >
          Show All Books
        </Button>
      </div>
    </>
  );
};

export default Home;
