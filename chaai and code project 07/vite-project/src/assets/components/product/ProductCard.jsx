import { useState } from 'react';

function ProductCard({ imgUrl, productTitle, price, category, onAddToCart }) {
  const [addFav, setAddFav] = useState(false); // Optional, not used yet

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
      <img
        src={imgUrl}
        alt={productTitle}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="md:text-lg text-sm md:text-green-500 sm:text-blue-700 font-semibold line-clamp-1">
        {productTitle}
      </h2>
      <p className="text-orange-600 font-bold mt-2">${Math.floor(price)}</p>
      <p className="text-sm text-gray-500 mt-1 capitalize">{category}</p>
      <div className="flex items-center justify-center mt-3">
        <button
          onClick={onAddToCart} // ✅ Trigger Add to Cart logic passed from parent
          className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
