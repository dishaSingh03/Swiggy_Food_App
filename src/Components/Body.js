import React, { useEffect, useState } from "react";
import RestaurantCard, { higherwithPromtedLevel } from "./RestaurantCard";
// import "./ResCard.css";
import { restaurantList } from "../Contants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { BounceLoader, RingLoader, FadeLoader } from "react-spinners";

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  // console.log(MENU_DATA);
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterSearchRestaurant, setFilterSearchRestaurant] = useState([]);

  const[recommendLevel, setRecommendLevel] = useState("");

  //Higher order component (higherwithPromtedLevel)
  const PromotedComponent = higherwithPromtedLevel(RestaurantCard);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterSearchRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRecommendLevel(
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.isOpen
    );

    

    console.log("kskks", json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info);
  };

  useEffect(() => {
    getData();
  }, []);

  const resHandle = () => {
    let filterRestaurantList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.2
    );
    // setlistOfRestaurant(filterRestaurantList);
    setFilterSearchRestaurant(filterRestaurantList);
  };

  const searchHandle = () => {
    const filterSearch = listOfRestaurant.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterSearchRestaurant(filterSearch);
  };

  console.log(filterSearchRestaurant);

  return listOfRestaurant.length === 0 ? (
    <FadeLoader className="loader" color="#36d7b7" />
  ) : (
    <div className="body">
      <div className="search">
        <input
          id="box"
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {"  "}
        <button className="search-btn" onClick={searchHandle}>
          search
        </button>{" "}
        <button className="filter-btn" onClick={resHandle}>
          filter
        </button>
      </div>

      <div className="res-con ">
        {filterSearchRestaurant.map((data, index) => (
          <Link
            style={{ textDecoration: "none" }}
            key={data.info.id}
            to={"/restaurants/" + data.info.id}
          >
            {recommendLevel ? (
              <PromotedComponent resData={data}/>
            ) : (
              <RestaurantCard resData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
