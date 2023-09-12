export const generatePageList = (count: number) =>
  Array(count)
    .fill(1)
    .map((_, index) => index + 1);

export const getItemActivation = (itemPage: number, currentPage: number) =>
  currentPage === itemPage ? 'active' : 'inactive';
