import { useEffect, useState } from "react";


//Custom hook
const useRestaurantMenu = (resId) => {
     const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        getMenuDetails();
    }, [])


    const getMenuDetails = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&submitAction=ENTER"
        );
        const json = await data.json();
    
        // console.log(json);
    
        setresInfo(json.data);
      };

    return resInfo;
}

export default useRestaurantMenu;