// src/components/CategoryPanel.jsx
import React from "react";
import "./CategoryPanel.css";

const CategoryPanel = ({ category }) => {
  if (category !== "baby-clothing") return null;

  return (
    <div className="category-panel">
      <div className="column">
        <h4>new born clothing</h4>
        <ul>
          <li>New born onesies & rompers</li>
          <li>New born nightwear & sleepsuits</li>
          <li>New born baby sets & suits</li>
          <li>New born baby dresses & frocks</li>
          <li>New born baby leggings & shorts</li>
          <li>New born baby t-shirts</li>
          <li>New born caps, gloves & mittens</li>
          <li>New born inner wear</li>
          <li>New born baby jackets</li>
          <li>New born baby sweaters</li>
        </ul>
      </div>
      <div className="column">
        <h4>baby boys clothing</h4>
        <ul>
          <li>Baby boys t-shirts</li>
          <li>Baby boys shirts</li>
          <li>Baby boys jeans & trousers</li>
          <li>Baby boys shorts</li>
          <li>Baby boys sets & suits</li>
          <li>Baby boys innerwear & thermals</li>
          <li>Baby boys socks</li>
          <li>Baby boys sweat shirts & jackets</li>
          <li>Baby boys sweaters</li>
          <li>Baby boys swim wear</li>
        </ul>
      </div>
      <div className="column">
        <h4>baby girls clothing</h4>
        <ul>
          <li>Baby girls tops & t-shirts</li>
          <li>Baby girls dresses & frocks</li>
          <li>Baby girls jeans & trousers</li>
          <li>Baby girls leggings</li>
          <li>Baby girls shorts & skirts</li>
          <li>Baby girls sets & suits</li>
          <li>Baby girls innerwear & thermals</li>
          <li>Baby girls socks</li>
          <li>Baby girls swim wear</li>
          <li>Baby girls sweat shirts & jackets</li>
          <li>Baby girls sweaters</li>
        </ul>
      </div>
      <div className="column">
        <h4>shop by age</h4>
        <ul>
          <li>Preemie/tiny preemie</li>
          <li>New born (0-3 months)</li>
          <li>3 - 6 months</li>
          <li>6 - 9 months</li>
          <li>9 - 12 months</li>
          <li>12 - 18 months</li>
          <li>18 - 24 months</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryPanel;
