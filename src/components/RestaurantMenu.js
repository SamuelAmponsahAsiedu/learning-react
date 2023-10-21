import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    const[restaurantInfo, setRestaurantInfo] =useState(null)

    const{resId} = useParams();


    useEffect(() =>{
        fetchMenu()
    }, [])

    const fetchMenu = async() => {
        const data = await fetch(
           MENU_API+resId
        )

        const json = await data.json();

        console.log(json);
        setRestaurantInfo(json.data)
    }

    
    if (restaurantInfo === null) return <Shimmer /> 
    
    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[0]?.card?.card?.info

    const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(", ")}</h1>
            <h1>{costForTwoMessage}</h1>

            <h2>Menu</h2>
            <ul>
               {itemCards.map((item) => (
               <li key={item.card.info.id}>
                    {item.card.info.name} - {" Rs."}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}
               </li>))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;