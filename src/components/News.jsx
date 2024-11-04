import React from 'react'
import Navbar from './navbar'
import Footer from '../components/Footer'
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo } from 'react';
import News1 from '../assets/images/news1.png'
import News2 from '../assets/images/news2.png'
import Card from './NewsCard'
import { useEffect } from 'react';



const News = () => {



  const Pagination = ({
    totalItems = 100,
    itemsPerPage = 10,
    maxVisiblePages = 5,
    onPageChange = (page) => console.log(`Page changed to ${page}`),
  }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Generate the array of page numbers to display
    const pageNumbers = useMemo(() => {
      const pages = [];
      let startPage = 1;
      let endPage = totalPages;

      // If total pages exceed max visible pages, calculate start and end
      if (totalPages > maxVisiblePages) {
        const halfVisible = Math.floor(maxVisiblePages / 2);

        if (currentPage <= halfVisible) {
          // Near the start
          endPage = maxVisiblePages;
        } else if (currentPage > totalPages - halfVisible) {
          // Near the end
          startPage = totalPages - maxVisiblePages + 1;
        } else {
          // In the middle
          startPage = currentPage - halfVisible;
          endPage = currentPage + halfVisible;
        }
      }

      // Create array of visible page numbers
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    }, [currentPage, totalPages, maxVisiblePages]);

    // Handle page change
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        setCurrentPage(page);
        onPageChange(page);
      }
    };

    // Handle next/previous
    const handlePrevious = () => handlePageChange(currentPage - 1);
    const handleNext = () => handlePageChange(currentPage + 1);

    return (
      <nav className="flex items-center justify-center space-x-2">
        {/* Previous button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors
            ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600'}
          `}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`w-8 h-8 rounded-full transition-colors
              ${currentPage === pageNumber
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'}
            `}
            aria-label={`Page ${pageNumber}`}
            aria-current={currentPage === pageNumber ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        ))}

        {/* Show ellipsis if needed */}
        {totalPages > maxVisiblePages && pageNumbers[pageNumbers.length - 1] < totalPages && (
          <span className="px-2 text-gray-400">...</span>
        )}

        {/* Show last page if not visible */}
        {totalPages > maxVisiblePages && !pageNumbers.includes(totalPages) && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={`Page ${totalPages}`}
          >
            {totalPages}
          </button>
        )}

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors
            ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600'}
          `}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>
    );
  }

  const handlePageChange = (page) => {
    // Implement your page change logic here
    console.log(`Page changed to ${page}`);
  };

  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null)
  const API_KEY = "415055f840494dd58ad821857a8de48f";


  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    let dt = jsonData.articles.slice(0, 10)
    setNewsData(dt)

  }

  useEffect(() => {
    getData()
  }, [])

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)

  }
  const userInput = (event) => {
    setSearch(event.target.value)
  }


  return (
    <main className='bg-[#00040F]'>
      <Navbar />
      <div className='news-container'>

        <h1 className='text-3xl lg:text-5xl my-4 mt-12 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Stay Tuned With The </h1>
        <h2 className='text-3xl text-purple-400 text-center font-semibold'>Latest News & Facts</h2>
      </div>




      <div className='main-news-container  overflow-y-auto '>
        <div className='news-area '>
          <div className="p-8">
            <Pagination
              totalItems={100}
              itemsPerPage={10}
              maxVisiblePages={5}
              onPageChange={handlePageChange}
            />
          </div>
          <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
            <button onClick={getData}>Search</button>
          </div>
      

          <div>
            {newsData ? <Card data={newsData} /> : null}

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default News