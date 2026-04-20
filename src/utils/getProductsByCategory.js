export const getProductsByCategory = (products, category) => {
  if (!Array.isArray(products)) return [];
  if (!category || category.toLowerCase() === 'all') return products;
  return products.filter((product) => {
    const productCategory = product?.category || '';
    return String(productCategory).toLowerCase() === String(category).toLowerCase();
  });
};
