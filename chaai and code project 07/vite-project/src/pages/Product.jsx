import React, { useEffect, useState, useContext } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import ProductCard from '../assets/components/product/ProductCard';
import Footer from '../assets/components/footer/Footer';
import Header from '../assets/components/header/Header';
import { CartContext } from "../Feature/CartContext"; 
export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(CartContext); // 👈 Access cart dispatch

  // Fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imgUrl={product.image}
                productTitle={product.title}
                price={product.price}
                category={product.category}
                onAddToCart={() => handleAddToCart(product)} 
                
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
