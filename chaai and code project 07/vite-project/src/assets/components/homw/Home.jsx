import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Slider from "../../../pages/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full">

        {/* Hero Section */}
        <aside className="relative bg-gradient-to-r from-orange-50 via-white to-orange-100 overflow-hidden py-20 px-4 sm:px-10 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            
            {/* Text Section */}
            <div className="z-10 space-y-6 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug">
                Welcome to <span className="text-orange-600">AllinOneStore</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
                Your One-Stop Digital Bazaar for electronics, fashion, groceries, and more — all just a click away!
              </p>

              <Link
                to="/product"
                className="inline-flex items-center px-6 py-3 text-white bg-orange-700 hover:bg-orange-800 transition rounded-lg font-medium text-lg shadow-md"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                <span className="ml-2">Shop Now</span>
              </Link>
            </div>

            {/* Image Section */}
            <div className="z-10">
              <img
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg"
                alt="E-commerce Banner"
              />
            </div>
          </div>
        </aside>

        {/* Slider Section */}
        <Slider />

        {/* Center Text Section */}
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold text-gray-900 py-16 px-4 leading-tight">
          <span className="text-orange-600">One Click</span> Away From{" "}
          <span className="underline decoration-orange-500">Everything</span> You Need.
        </h1>
      </div>
      <Footer />
    </>
  );
}
