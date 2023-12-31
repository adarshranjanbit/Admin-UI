import React from 'react'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({ filteredUsers, itemPerPage, currentPage,  setCurrentPage }) => {

    //  Array of numbers containing the number of pages.
    var pages = [];

    //  Calculate the number of pages.
    for(let i=1; i<=Math.ceil(filteredUsers.length/itemPerPage); i++) {
        pages.push(i);
    };

    //  set the current page to the clicked page number.
    const handleClick = e => {
        setCurrentPage(Number(e.target.id));
    };

    //  paginate to the first page.
    const handleFirstBtn = () => {
        setCurrentPage(1);
    };

    //  paginate to the previous page.
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
    };

    //  page numbers to be displayed in the pagination.
    const renderPageNumbers = pages.map(number => {
        return (
            <li key={number}>
                <button 
                    id={number} 
                    className={`${currentPage === number ? "active" : null} w-10 h-10 bg-white dark:bg-dark text-indigo-600 transition-colors duration-100 rounded-full focus:shadow-outline hover:bg-indigo-100 dark:hover:bg-indigo-300`} 
                    onClick={handleClick}
                >
                    {number}
                </button>
            </li>
        );
    });

    //  paginate to the next page.
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
    };

    //  paginate to the last page.
    const handleLastBtn = () => {
        setCurrentPage(Math.ceil(filteredUsers.length/itemPerPage));
    };

    return (
        <nav data-testid="pagination" id="pagination" aria-label="Page navigation">
            <ul className="inline-flex space-x-1 sm:space-x-4 md:space-x-4 px-auto text-center">
                <li>
                    <button 
                    id="first"
                    name="first" 
                    className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 dark:hover:bg-indigo-300 disabled:opacity-60 disabled:bg-transparent" 
                    onClick={handleFirstBtn} 
                    disabled={currentPage === pages[0] ? true : false} 
                    >
                    <HiChevronDoubleLeft />
                    </button>
                </li>
                <li>
                    <button 
                    id="prev" 
                    name="prev"
                    className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 dark:hover:bg-indigo-300 disabled:opacity-60 disabled:bg-transparent" 
                    onClick={handlePrevBtn} 
                    disabled={currentPage === pages[0] ? true : false}
                    >
                    <IoIosArrowBack />
                    </button>
                </li>
                {renderPageNumbers}
                <li>
                    <button 
                    id="next" 
                    name="next"
                    className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 dark:hover:bg-indigo-300 disabled:opacity-60 disabled:bg-transparent" 
                    onClick={handleNextBtn} 
                    disabled={currentPage === pages[pages.length - 1] ? true : false} 
                    >
                    <IoIosArrowForward />
                    </button>
                </li>
                <li>
                    <button 
                    id="last" 
                    name="last"
                    className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 dark:hover:bg-indigo-300 disabled:opacity-60 disabled:bg-transparent" 
                    onClick={handleLastBtn} 
                    disabled={currentPage === pages[pages.length - 1] ? true : false}
                    >
                    <HiChevronDoubleRight />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
