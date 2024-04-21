import React, { useState } from "react";

import RestBodyAccordion from "./RestBodyAccordion";


const ResturantAccordions = ({data, showAccordian, setShowIndex, setShowAccordian}) => {
  console.log(data);

  //lifting the state up setShowIndex();
const handleClick = () => {
  setShowIndex();
  setShowAccordian(!showAccordian);
 
}

  return (
    <div>
      {/* Header of accordions */}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg cursor-pointer">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Body of accordions */}
      <div>
        {" "}
        {showAccordian  && <RestBodyAccordion items={data.itemCards} />}
        
      </div>
    </div>
  );
};

export default ResturantAccordions;
