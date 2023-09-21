"use client";

import { myStyle } from "@/styles/container.css";
import {
  categoryStyle,
  selected,
  category_container,
} from "@/styles/category.css";
import ArticleCategoryCard from "@/components/composables/Card/ArticleCategoryCard";

type ArticleCategoryType = {
  selectedCategory: string;
  selectCategoryHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  categories: string[];
};

export default function UserArticleCategory({
  selectedCategory,
  selectCategoryHandler,
  categories,
}: ArticleCategoryType) {
  return (
    <ArticleCategoryCard>
      <div className={category_container}>
        {categories.map((category) => (
          <div
            key={category}
            onClick={selectCategoryHandler}
            className={`${
              selectedCategory === category ? selected : ""
            } ${categoryStyle} ${myStyle}`}
          >
            {category}
          </div>
        ))}
      </div>
    </ArticleCategoryCard>
  );
}
