import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Seo from "../../components/Seo";
import { getBooks } from "../../apis/api";
import { IBook, IBookResponse } from "@/types/types";

interface DetailPageProps {
  bookList: IBookResponse;
}

export const getServerSideProps: GetServerSideProps<DetailPageProps> = async ({
  params,
}) => {
  const bookCategory = params?.id as string;

  const { results: bookList } = await getBooks(bookCategory);

  if (!bookList) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      bookList,
    },
  };
};

export default function DetailPage({ bookList }: DetailPageProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Seo title={`Detail - ${id}`} />
      {!bookList ? (
        <h4>Loading...</h4>
      ) : (
        bookList?.books.map((book: IBook) => (
          <div key={`${book.isbns[0].isbn10}-${book.isbns[0].isbn13}`}>
            <h4>{book.title}</h4>
          </div>
        ))
      )}
    </div>
  );
}
