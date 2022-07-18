import React, {useState, useEffect} from 'react';
import "./Pagination.css"; 
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
 
const Pagination = (props) => {
const {changePage, pageCount} = props;
     
  return ( 
    <ReactPaginate 
            previousLabel={<FaAngleLeft /> }
            nextLabel={<FaAngleRight /> }
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"custom-pagination-buttons"}
            previousLinkClassName={"custom-pagination-prev-btn"}
            nextLinkClassName={"custom-pagination-next-btn"}
            disabledClassName={"custom-pagination-btn-disabled"}
            activeClassName={"custom-pagination-active-btn"}
            breakLabel={"..."}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
        />
  )
}

export default Pagination