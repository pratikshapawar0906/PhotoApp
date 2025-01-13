import React from "react";
import Category1 from "../../assets/allCategories/cat1.jpeg";
import Category2 from "../../assets/allCategories/cat2.jpeg";
import Category3 from "../../assets/allCategories/cat3.jpeg";
import Category4 from "../../assets/allCategories/cat4.jpeg";
import Category5 from "../../assets/allCategories/cat5.jpeg";
import Category6 from "../../assets/allCategories/cat6.jpeg";
import CategoryCard from "../categoryCard/CategoryCard";
import "./Categories.css";

const Categories = () => {
  const Allcategories = [
    {
      id: 1,
      categoryName: "Wedding",
      categoryImage: Category1,
    },
    {
      id: 2,
      categoryName: "Product",
      categoryImage: Category2,
    },
    {
      id: 3,
      categoryName: "Portrait",
      categoryImage: Category3,
    },
    {
      id: 4,
      categoryName: "Architecture",
      categoryImage: Category4,
    },
    {
      id: 5,
      categoryName: "Kids",
      categoryImage: Category5,
    },
    {
      id: 6,
      categoryName: "Kids",
      categoryImage: Category6,
    },
  ];

  return (
    <div className="categories-container">
      {Allcategories.map((category) => (
        <CategoryCard
          key={category.id}
          categoryImage={category.categoryImage}
          categoryName={category.categoryName}
        />
      ))}
    </div>
  );
};

export default Categories;
