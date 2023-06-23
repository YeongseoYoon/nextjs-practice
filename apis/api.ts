// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getBookCategories() {
  try {
    const data = await (
      await fetch("https://books-api.nomadcoders.workers.dev/lists")
    ).json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBooks(bookCategory: string) {
  try {
    const data = await (
      await fetch(
        `https://books-api.nomadcoders.workers.dev/list?name=${bookCategory}`
      )
    ).json();
    return data;
  } catch (error) {
    throw error;
  }
}
