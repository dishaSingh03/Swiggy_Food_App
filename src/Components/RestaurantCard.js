import React from "react";
import Body from "./Body";
import "./ResCard.css";
import foodImg from "../Assests/food.png";

// Body
// -search
// -RestaurantContiner
//     -RestaurantCard
//     -Image
//     -name of resizeBy, star rating, cuisine
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] bg-slate-300 hover:bg-slate-400 rounded-lg">
      <img
        className="foodImg"
        src={IMG_CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg ">{resData.info.name}</h3>
      <h4 className="font-semibold py-1">{resData.info.cuisines.join(", ")}</h4>
      <h4> Ratings: {resData.info.avgRating < 4 ? "★★★☆☆" : "★★★★☆"}</h4>
      <h4> deliveryTime : {resData.info.sla.deliveryTime}</h4>
      <h5> {resData.info.costForTwoString}</h5>
    </div>
  );
};

// Higher order componment for enchancing (adding promted level on restaurant card)

// Its takes a component, enhances it without modifing orginal component and returns a new modified component

export const higherwithPromtedLevel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
