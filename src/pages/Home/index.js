import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategory } from "../../utils/getProductsByCategory";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { cart } = useCart();
  console.log({ cart });

  useEffect(() => {
    (async () => {
      const productsData = await getAllProducts();
      const categoriesData = await getAllCategories();
      const updatedCategories = [...categoriesData, { id: "1a", name: "All" }]; // ✅ fixed
      setProducts(productsData);
      setCategories(updatedCategories);
    })();
  }, []);

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // ✅ fixed: show all products when "All" is selected
  const filterByCategories =
    selectedCategory === "All"
      ? products
      : getProductsByCategory(products, selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className="flex gap-4 justify-center mb-4 flex-wrap">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div
                key={category.id}
                className={`${
                  selectedCategory === category.name
                    ? "bg-green-700 text-white"
                    : "bg-green-400"
                } font-semibold rounded-full px-3 py-1 cursor-pointer hover:bg-green-500`}
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {filterByCategories?.length > 0 ? (
            filterByCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2>No products found. Please try with another category</h2>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
