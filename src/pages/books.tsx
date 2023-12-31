import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import { IBook } from "../types/globalTypes";
import BookCard from "../components/BookCard";

export default function Books() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data);
  console.log(isLoading);
  console.log(error);
  let productsData = data?.data;
  console.log(productsData);
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
