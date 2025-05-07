import React, { useState } from "react";
import CategoryPanel from "./CategoryPanel";
import './Header.css';

function Header() {

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(prev => (prev === category ? null : category));
      };

  return (
    <>
    <header>
      <div className="top-bar">
        🌞 Spring Summer 2025 is here! Dress your little one in soft, breathable fabrics for ultimate comfort and style! 🌞
      </div>

      <div className="main-header">
        <div className="store-link">
          <span role="img" aria-label="location">📍</span> Stores
        </div>

        <div className="logo">mothercare</div>

        <div className="header-icons">
          🔍 👤 🤍 🛒
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
        <li onClick={() => handleCategoryClick("baby-clothing")}>
              Baby Clothing
            </li>
          <li>Baby Clothing</li>
          <li>Kids Clothing</li>
          <li>Moms & Maternity</li>
          <li>Babycare</li>
          <li>Baby Gear</li>
          <li>Furniture & Bedding</li>
          <li>Footwear & Accessories</li>
          <li>Toys</li>
          <li>Sale</li>
        </ul>
      </nav>
    </header>

    <CategoryPanel category={activeCategory} />
    </>
  );
}

export default Header;
