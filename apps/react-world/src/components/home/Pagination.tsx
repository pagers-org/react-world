interface PaginationProps {
  pages: number[];
  activePage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pages, activePage }) => {
  return (
    <ul className="pagination">
      {pages.map(page => (
        <li
          key={page}
          className={`page-item ${page === activePage ? 'active' : ''}`}
        >
          <a className="page-link" href="">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
