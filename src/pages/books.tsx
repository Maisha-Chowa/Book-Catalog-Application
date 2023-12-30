import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import { IBook } from "../types/globalTypes";
import BookCard from "../components/BookCard";

export default function Books() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data);
  let productsData = data?.data;
  console.log(productsData);
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]"></div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
