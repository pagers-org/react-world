import Link from 'next/link';

export default function Pagination({ pageList }: { pageList: Array<number> }) {
  return (
    <ul className="pagination">
      {pageList.map(num => {
        return (
          <Link
            key={num}
            className="page-item active"
            href={`/home?page=${num}`}
          >
            {num}
          </Link>
        );
      })}
    </ul>
  );
}
