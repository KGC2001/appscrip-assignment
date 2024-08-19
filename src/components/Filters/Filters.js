import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        customizable: false,
        idealFor: 'All',
        occasion: 'All',
        work: 'All',
        fabric: 'All',
        segment: 'All',
        suitableFor: 'All',
        rawMaterials: 'All',
        pattern: 'All',
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const updatedFilters = { ...filters, [name]: checked };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className="filters">
            <div className="filter-item">
                <label>
                    <input
                        type="checkbox"
                        name="customizable"
                        checked={filters.customizable}
                        onChange={handleCheckboxChange}
                    />
                    Customizable
                </label>
            </div>

            <div className="filter-item">
                <label>Ideal For</label>
                <select
                    name="idealFor"
                    value={filters.idealFor}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Occasion</label>
                <select
                    name="occasion"
                    value={filters.occasion}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Party">Party</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Work</label>
                <select
                    name="work"
                    value={filters.work}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Embroidery">Embroidery</option>
                    <option value="Print">Print</option>
                    <option value="Woven">Woven</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Fabric</label>
                <select
                    name="fabric"
                    value={filters.fabric}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Silk">Silk</option>
                    <option value="Wool">Wool</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Segment</label>
                <select
                    name="segment"
                    value={filters.segment}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Premium">Premium</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Basic">Basic</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Suitable For</label>
                <select
                    name="suitableFor"
                    value={filters.suitableFor}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="All Seasons">All Seasons</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Raw Materials</label>
                <select
                    name="rawMaterials"
                    value={filters.rawMaterials}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Natural">Natural</option>
                    <option value="Synthetic">Synthetic</option>
                    <option value="Blended">Blended</option>
                </select>
            </div>

            <div className="filter-item">
                <label>Pattern</label>
                <select
                    name="pattern"
                    value={filters.pattern}
                    onChange={handleSelectChange}
                >
                    <option value="All">All</option>
                    <option value="Solid">Solid</option>
                    <option value="Striped">Striped</option>
                    <option value="Floral">Floral</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;


// import React from 'react';
// import './Filters.css'

// const Filters = ({ onFilterChange }) => {
//   return (
//     <aside className="filters">
//       <h2>Filters</h2>
//       <div className="filter-group">
//         <label>
//           <input type="checkbox" value="electronics" onChange={onFilterChange} />
//           Electronics
//         </label>
//         <label>
//           <input type="checkbox" value="jewelery" onChange={onFilterChange} />
//           Jewelery
//         </label>
//         {/* Add more filters here */}
//       </div>
//       <div className="filters">
//       <div className="filter-group">
//         <h3>Customizable</h3>
//         <select onChange={onFilterChange}>
//           <option value="all">All</option>
//           {/* Add more options */}
//         </select>
//       </div>
//       <div className="filter-group">
//         <h3>Ideal For</h3>
//         <select onChange={onFilterChange}>
//           <option value="all">All</option>
//           {/* Add more options */}
//         </select>
//       </div>
//       {/* Add more filter groups as needed */}
//     </div>
//     </aside>
//   );
// };

// export default Filters;
