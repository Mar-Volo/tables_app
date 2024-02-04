
export interface PaginationProps {
    dataCount: number;
    dataToWriteCount: number;
    className: string;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }

  const Pagination: React.FC<PaginationProps> = ({ dataCount, dataToWriteCount, className, handleClick }) => {
    const pages = Math.ceil(dataCount / dataToWriteCount);
    return (
      <nav className={className} aria-label="Accounts pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Prev" onClick={handleClick} data-prev>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {[...Array(pages)].map((_, i) => (
            <li key={i} className="page-item">
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next" onClick={handleClick} data-next>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
