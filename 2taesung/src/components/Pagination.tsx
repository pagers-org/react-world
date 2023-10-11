import Link from 'next/link';

export default function Pagination({ pageNums }: { pageNums: Array<number> }) {
  return (
    <ul className="pagination">
      {pageNums?.map(num => {
        return (
          <li key={num} className="page-item">
            <Link className="page-link" href={`/home?page=${num}`}>
              {num}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
