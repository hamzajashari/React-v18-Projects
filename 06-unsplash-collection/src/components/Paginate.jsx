import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../pagination.css";
import { useGlobalContext } from "../context";

const pageCount = 10;

const Paginate = () => {
  const { setPage } = useGlobalContext();
  const handlePageClick = ({ selected: selectedPage }) => {
    setPage(selectedPage + 1);
  };

  return (
    <section className="pagination-container">
      <ReactPaginate
        initialPage={0}
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={<IoIosArrowForward style={{ fontSize: 18, width: 150 }} />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={"item pagination-page "}
        pageRangeDisplayed={5}
        previousClassName={"item previous"}
        previousLabel={<IoIosArrowBack style={{ fontSize: 18, width: 150 }} />}
      />
    </section>
  );
};
export default Paginate;
