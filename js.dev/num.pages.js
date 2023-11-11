function averagePages(books) {
  if (books.length === 0) return 0;
  const totalPages = books
    .map((book) => book.pages)
    .reduce((acc, pages) => acc + pages, 0);
  return totalPages / books.length;
}
