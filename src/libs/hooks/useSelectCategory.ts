import { useState } from "react";

type CategoryAndUrl = {
  [key: string]: string;
};

export const useSelectCategory = (initialcategoryAndUrl: CategoryAndUrl) => {
  const [categoryAndUrl, setCategoryAndUrl] = useState(initialcategoryAndUrl);
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(categoryAndUrl)[0]
  );

  const selectCategoryHandler = (e: React.MouseEvent) => {
    const clickedCategory = e.currentTarget.textContent;
    if (clickedCategory !== null) {
      setSelectedCategory(clickedCategory);
    }
  };

  return {
    categoryAndUrl,
    selectedCategory,
    selectCategoryHandler,
  };
};
