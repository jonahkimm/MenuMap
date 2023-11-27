import React from "react";
import { createPortal } from "react-dom";

const RecommendPopup = ({ open, onClose, restaurant }) => {
  if (!open) return null;

  return createPortal(
    <div>
      {/* Overlay to darken the background */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 xl:scale-100 lg:scale-75">
        <div className="absolute flex flex-col w-80 rounded-xl bg-white text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-44 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={restaurant.image} alt={restaurant.name} />
          </div>

          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {restaurant.name}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {restaurant.description && restaurant.description !== ""
                ? restaurant.description
                : "No Description"}{" "}
              <br />
              <br />
            </p>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Calories:{" "}
              {restaurant.nutrition &&
              Object.keys(restaurant.nutrition).length > 0
                ? restaurant.nutrition.calories
                : "n/a"}{" "}
              <br />
              Fat:{" "}
              {restaurant.nutrition &&
              Object.keys(restaurant.nutrition).length > 0
                ? restaurant.nutrition.fat
                : "n/a"}{" "}
              <br />
              Sugar:{" "}
              {restaurant.nutrition &&
              Object.keys(restaurant.nutrition).length > 0
                ? restaurant.nutrition.sugar
                : "n/a"}{" "}
              <br />
              Carbs:{" "}
              {restaurant.nutrition &&
              Object.keys(restaurant.nutrition).length > 0
                ? restaurant.nutrition.carbohydrates
                : "n/a"}{" "}
              <br />
              Fiber:{" "}
              {restaurant.nutrition &&
              Object.keys(restaurant.nutrition).length > 0
                ? restaurant.nutrition.fiber
                : "n/a"}{" "}
              <br />
              Protein:{" "}
              {restaurant.nutrition &&
              Object.keys(restaurant.nutrition).length > 0
                ? restaurant.nutrition.protein
                : "n/a"}{" "}
              <br />
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={onClose}
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default RecommendPopup;
