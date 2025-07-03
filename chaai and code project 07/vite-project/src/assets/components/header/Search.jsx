// src/assets/components/header/Search.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import Header from './Header';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.trim()) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [query]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // OPTIONAL: prevent duplicates
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      // alert("Already in cart");
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    // alert(`${product.title} added to cart`);
  };

  return (
    <>
      <Header />
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imgUrl={product.images[0]}
                productTitle={product.title}
                price={product.price}
                category={product.category}
                onAddToCart={() => handleAddToCart(product)
                
                }
              
              />
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}
