import React from "react";
export default function Pagination(props) {
  const { postPerPage, totalPosts, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  let pagination = pageNumbers.map((number) => {
    return (
      <div>
        <li className="page-item m-1">
          <a
            onClick={() => paginate(number)}
            className="page-link text-dark"
            href="#!"
          >
            {number}
          </a>
        </li>
      </div>
    );
  });
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center my-3">{pagination}</ul>
    </nav>
  );
}
