import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    const{resId} = useParams();

    const restaurantInfo = useRestaurantMenu(resId)

    const[showIndex, setShowIndex] =useState(null);
   
    
    if (restaurantInfo === null) return <Shimmer /> 
    
    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[0]?.card?.card?.info

    const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    // console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    const categories = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    return (
        <div className="text-center"> 
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage} </p>
            {categories.map((category, index) => <RestaurantCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
            />)}
            <div>

            </div>
        </div>
        
    )
}

export default RestaurantMenu;