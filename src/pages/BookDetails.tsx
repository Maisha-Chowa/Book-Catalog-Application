import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/Books/bookApi";
import { IBook } from "../types/globalTypes";
import { Button } from "../components/ui/button";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(data);
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[40%] p-10">
          <img src={data?.thumbnailUrl} className="w-full" alt="book" />
        </div>

        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Title: {data?.title}</h1>
          <h1 className="text-xl font-semibold">isbn: {data?.isbn}</h1>
          <p className="text-xl">
            <span className="font-semibold"> PageCount:</span> {data?.pageCount}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-semibold"> PublishedDate:</span>{" "}
            {data?.publishedDate}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-semibold">Short Description: </span>
            {data?.shortDescription}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Long Description: </span>
            {data?.longDescription}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Status: </span>
            {data?.status}
          </p>
          <p className="text-xl font-semibold"> Authors:</p>
          <ul className="space-y-1 text-lg">
            {data?.authors?.map((author: string) => (
              <li>{author}</li>
            ))}
          </ul>
          <p className="text-xl font-semibold"> Genre: </p>
          <ul className="space-y-1 text-lg">
            {data?.genre?.map((gnr: string) => (
              <li>{gnr}</li>
            ))}
          </ul>
          <Button className="bg-teal-300 rounded-xl">Add to Wishlist</Button>
        </div>
      </div>
      {/* <ProductReview id={id!} /> */}
    </>
  );
};

export default BookDetails;
