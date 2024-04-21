import React, { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { BounceLoader, RingLoader, FadeLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import ResturantAccordions from "./ResturantAccordions";

const RestMenu = () => {
  const { resId } = useParams();

  //costom hook useRestaurantMenu
  const resInfo = useRestaurantMenu(resId);

  //controlled component
  ////lifting the state up showIndex, index
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo || !resInfo.cards || resInfo.cards.length === 0) {
    // Render loading state or return null until data is fetched
    return <FadeLoader className="loader" color="#36d7b7" />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  //   const { itemCards } =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.categories;

  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .categories
  );

  console.log("des", resInfo?.cards[0]?.card?.card);

  console.log(
    "jsssssssssssjsjsjj",
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.[
      "@type"
    ]
  );

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.carousel || [];

  const sectionsItemCategories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("sectionsItemCategories", sectionsItemCategories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordians */}

      {sectionsItemCategories.map((accord, index) => (
        // controlled component
        //lifting the state up showAccordian, index
        <ResturantAccordions
          key={accord.card.card.title}
          data={accord.card.card}
          showAccordian={index === showIndex}
          setShowAccordian={() => setShowIndex(index)}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestMenu;
