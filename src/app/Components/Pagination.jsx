function Pagination({ pageNumber = 1, totalPages = 1000 }) {
  return (
    <div>
      pagination {pageNumber} of {totalPages}
    </div>
  );
}

export default Pagination;
