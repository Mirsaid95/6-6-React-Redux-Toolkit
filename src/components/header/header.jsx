import React from "react";
import { CartIcon } from "../../assets/cardIcon";
import { Cart } from "../cart/cart";
import { useSelector } from "react-redux";

export const Header = () => {
  const [showP, setShowP] = React.useState(false);
  const { count } = useSelector((state) => state.product);

  return (
    <div className="p-8 bg-blue-500">
      {/* Agar showP rost bo'lsa, modal fonini va drawerni ko'rsatsin */}
      {showP && (
        <div
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 transition-opacity"
          onClick={() => setShowP(false)}
        >
          <div
            className="fixed top-0 left-0 h-full bg-white shadow-lg p-4 w-64 transform transition-transform"
            onClick={(e) => e.stopPropagation()} // Modal ichiga bosishda yopilmasligi uchun
          >
            <button
              className="text-gray-600 hover:text-gray-800 mb-4"
              onClick={() => setShowP(false)}
            >
              X
            </button>
            <Cart />
          </div>
        </div>
      )}
      <div className="max-w-[1200px] mx-auto">
        <button
          onClick={() => setShowP(true)}
          aria-label="cart"
          className="relative text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
            {count ? count : "0"}
          </span>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};
