import { GetServerSideProps } from "next";
import Seo from "../../../components/seo/Seo";
import { getBooks } from "../../../apis/api";
import { IBook, IBookResponse } from "@/types/types";

import styles from "./List.module.css";
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
  return (
    <main className={styles.main}>
      <Seo title={`Detail - ${bookList.list_name}`} />
      <h1 className={styles.detail_title}>{bookList.list_name}</h1>
      <div className={styles.detail_wrapper}>
        {!bookList ? (
          <h4>Loading...</h4>
        ) : (
          bookList?.books.map((book: IBook) => (
            <div
              className={styles.detail_card}
              key={`${book.amazon_product_url}-${book.primary_isbn13}`}
            >
              <img
                className={styles.detail_image}
                src={`${book.book_image}`}
              ></img>
              <h3 className={styles.detail_bookTitle}>{book.title}</h3>
              <h4 className={styles.detail_author}>{book.author}</h4>
              <button>
                <a href={`${book.amazon_product_url}`}>Buy Now →</a>
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
