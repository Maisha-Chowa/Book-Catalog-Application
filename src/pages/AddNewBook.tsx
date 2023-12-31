import React, { RefObject, useRef } from "react";
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { usePostNewBookMutation } from "../redux/features/Books/bookApi";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { IBook } from "../types/globalTypes";
import { useToast } from "../components/ui/use-toast";

const AddNewBook = () => {
  const { toast } = useToast();
  const titleRef = useRef<HTMLInputElement>(null);
  const isbnRef = useRef<HTMLInputElement>(null);
  const pageCountRef = useRef<HTMLInputElement>(null);
  const publishedDateRef = useRef<HTMLInputElement>(null);
  const thumbnailUrlRef = useRef<HTMLInputElement>(null);
  const shortDescriptionRef = useRef<HTMLInputElement>(null);
  const longDescriptionRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLInputElement>(null);
  const authorsRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);

  const [postNewBook, { isLoading, isError, isSuccess }] =
    usePostNewBookMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleRef?.current?.value;
    const isbn = isbnRef?.current?.value;
    const pageCount = pageCountRef?.current?.value;
    const publishedDate = publishedDateRef?.current?.value;
    const thumbnailUrl = thumbnailUrlRef?.current?.value;
    const shortDescription = shortDescriptionRef?.current?.value;
    const longDescription = longDescriptionRef?.current?.value;
    const status = statusRef?.current?.value;
    const authors = authorsRef?.current?.value;
    const genre = genreRef?.current?.value;

    const inputValue = {
      title,
      isbn,
      pageCount,
      publishedDate,
      thumbnailUrl,
      shortDescription,
      longDescription,
      status,
      authors,
      genre,
    };
    console.log(inputValue);

    const options = {
      data: inputValue,
    };

    console.log(options.data);
    postNewBook(options);

    toast({
      description: "New Book Added",
    });
    (event.target as HTMLFormElement).reset();
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h2 className="text-3xl font-semibold p-5 text-center"> Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="title">
              Title
            </Label>
            <Input id="title" placeholder="title" type="text" ref={titleRef} />
            <Label className="sr-only" htmlFor="ISBN">
              ISBN
            </Label>
            <Input id="isbn" placeholder="isbn no" type="text" ref={isbnRef} />
            <Label className="sr-only" htmlFor="page Count">
              Number of Page
            </Label>
            <Input
              id="pageCount"
              placeholder="Number of Page"
              type="text"
              ref={pageCountRef}
            />
            <Label className="sr-only" htmlFor="publishedDate">
              Published Date
            </Label>
            <Input
              id="publishedDate"
              placeholder="Published Date"
              type="text"
              ref={publishedDateRef}
            />
            <Label className="sr-only" htmlFor="thumbnailUrl">
              Image URL
            </Label>
            <Input
              id="thumbnailUrl"
              placeholder="Image URL"
              type="text"
              ref={thumbnailUrlRef}
            />
            <Label className="sr-only" htmlFor="shortDescription">
              Short Description
            </Label>
            <Input
              id="shortDescription"
              placeholder="Short Description"
              type="text"
              ref={shortDescriptionRef}
            />
            <Label className="sr-only" htmlFor="longDescription">
              Long Description
            </Label>
            <Input
              id="longDescription"
              placeholder="Long Description"
              type="text"
              ref={longDescriptionRef}
            />
            <Label className="sr-only" htmlFor="status">
              Status
            </Label>
            <Input
              id="status"
              placeholder="Status"
              type="text"
              ref={statusRef}
            />
            <Label className="sr-only" htmlFor="authors">
              Authors
            </Label>
            <Input
              id="authors"
              placeholder="authors"
              type="text"
              ref={authorsRef}
            />
            <Label className="sr-only" htmlFor="genre">
              Genre
            </Label>
            <Input id="genre" placeholder="genre" type="text" ref={genreRef} />
          </div>
          <Button
            type="submit"
            className="rounded-full h-15 w-15 p-2 text-1xl bg-teal-300"
          >
            Add Book
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBook;
