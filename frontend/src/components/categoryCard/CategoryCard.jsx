import React from "react";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <>
      <div className="category-card-container">
        <div className="category-card-image-container">
          <img src={props.categoryImage} alt={props.categoryName} />
        </div>
        <p className="text-center">{props.categoryName}</p>
      </div>
    </>
  );
};

export default CategoryCard;
