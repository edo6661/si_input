export const generatePagination = (currentPage: number, totalPage: number) => {
  if (totalPage <= 3) return Array.from({ length: totalPage }, (_, i) => i + 1);
  if (currentPage > 2)
    return [1, 2, "...", currentPage, totalPage - 1, totalPage];
  if (currentPage >= totalPage - 1)
    return [1, 2, "...", totalPage - 1, totalPage];
  return [
    1,
    2,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPage - 1,
    totalPage,
  ];
};
