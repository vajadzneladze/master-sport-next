import Link from 'next/link'
import { useRouter } from "next/router";

const Pagination = ({ items, pageSize, currentPage,onPageChange}) => {
    const { locale,asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}/${locale}${asPath}`;
    const redirect = URL.split("?")[0];
    const pagesCount = Math.ceil(items / pageSize);
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <Link className="page-link" href={redirect+"?page="+page} onClick={() => onPageChange(page)} >{page}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   
   
   export default Pagination;