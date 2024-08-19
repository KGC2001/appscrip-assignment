import React, { useState } from 'react';

import './HomePage.css'
import Navbar from '../Navbar/Navbar';
import Filters from '../Filters/Filters'
import Footer from '../Footer/Footer'
import ProductList from '../ProductList/ProductList';

const HomePage = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilters(prevFilters =>
      prevFilters.includes(value)
        ? prevFilters.filter(filter => filter !== value)
        : [...prevFilters, value]
    );
  };

  return (
    <div className="home-page">
      <Navbar/>
      <div className="content">
        <Filters className="content-filters" onFilterChange={handleFilterChange} />
        <ProductList className="content-list" filters={filters} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
