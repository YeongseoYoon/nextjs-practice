import Link from "next/link";
import { GetServerSideProps } from "next";
import Seo from "../components/seo/Seo";
import { getBookCategories } from "../apis/api";
import { IBookCategory } from "@/types/types";

import styles from "../styles/Home.module.css";

interface MyPageProps {
  bookCategories: IBookCategory[];
}
export const getServerSideProps: GetServerSideProps<{
  bookCategories: IBookCategory[];
}> = async () => {
  const { results: bookCategories } = await getBookCategories();
  if (!bookCategories) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bookCategories,
    },
  };
};

export default function Home({ bookCategories }: MyPageProps) {
  return (
    <main className={styles.main}>
      <Seo title="Home" />
      {!bookCategories ? (
        <h4>Loading...</h4>
      ) : (
        bookCategories?.map((category: IBookCategory) => (
          <button className="lined thick" key={category.list_name_encoded}>
            <Link
              href={`/list/${category.list_name_encoded}`}
              key={category.list_name_encoded}
            >
              {category.list_name + " →"}
            </Link>
          </button>
        ))
      )}
    </main>
  );
}
