import React from "react";
import { IMG_CDN_URL } from "../Contants";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";

const RestBodyAccordion = ({ items }) => {
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
        //   className="p-2 m-2  bg-gray-50 border-b-2 text-left flex justify-between"
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{items.card.info.name}</span>
              <br/>
              <span className="font-bold">
               Price - ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => addFoodItem(items)}>
                Add +
              </button>
            </div>
            <img
              src={IMG_CDN_URL + items.card.info.imageId}
              className="w-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestBodyAccordion;
