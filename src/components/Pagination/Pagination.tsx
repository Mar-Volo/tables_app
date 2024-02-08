import { useRef, useState } from "react";
import {Link} from "react-router-dom"
import { PaginationProps } from "../../interfaces/types";

const Pagination: React.FC<PaginationProps> = ({
  dataCount,
  dataToWriteCount,
  className,
  handleClick,
  pageClick,
}) => {
  const pages = Math.ceil(dataCount / dataToWriteCount);
  const [activePage, setActivePage] = useState<number>(0);
  const paginationItems = Array.from({ length: pages }, () =>
    useRef<HTMLLIElement>(null)
  );

  return (
    <nav className={className} aria-label="Accounts pagination">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={activePage === 0 ? "page-link disabled" : "page-link"}
            href="#"
            aria-label="Prev"
            onClick={(e) => {
              handleClick(e);
              setActivePage((prev) => prev - 1);
            }}
            data-prev
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {paginationItems.map((ref, i) => (
          <li
            key={i}
            ref={ref}
            className={`page-item ${i === activePage ? "active" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => {
                pageClick(i);
                setActivePage(i);
              }}
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className={
              activePage === paginationItems.length - 1
                ? "page-link disabled"
                : "page-link"
            }
            href="#"
            aria-label="Next"
            onClick={(e) => {
              handleClick(e);
              setActivePage((prev) => prev + 1);
            }}
            data-next
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
