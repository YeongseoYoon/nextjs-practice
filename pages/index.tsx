import Link from "next/link";
import { GetServerSideProps } from "next";
import Seo from "../components/Seo";
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
    <main>
      <Seo title="Home" />
      {!bookCategories ? (
        <h4>Loading...</h4>
      ) : (
        bookCategories?.map((category: IBookCategory) => (
          <Link
            href={`/list/${category.list_name_encoded}`}
            key={category.list_name_encoded}
          >
            <div>{category.list_name}</div>
          </Link>
        ))
      )}
    </main>
  );
}
