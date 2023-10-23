import RestaurantCard, {isOpen, isClosed} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState} from "react";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardOpen = isOpen(RestaurantCard);
    const RestaurantCardClose = isClosed(RestaurantCard);

    console.log(listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();

        console.log(json);
        
        setListOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ); 
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
            
    
    };

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false)
        return(
            <h1>
                Looks like you are offline!! check your internet settings
            </h1>
        )
    
       

    return  listOfRestaurants.length === 0 ? ( 
    <Shimmer />) :(
        
        <div className='body'>
            <div className="filter flex"> 
            <div className="search m-4 p-4">
               <input
                type="text"
                className="border border-solid border-black rounded-md "
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value)}}
               />
               

                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg "
                onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) =>

                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
    
                    setListOfRestaurants(filteredRestaurant);
    
                }}>Search</button>
            </div> 
            <div className="search m-4 p-4 flex items-center ">
                <button className='px-4 py-2 bg-gray-100 rounded-lg'
                    onClick={() => {
                        const filteredList = (listOfRestaurants.filter((res) => 
                        res.info.avgRating > 4.0)
                    );

                        setListOfRestaurants(filteredList);
                        }}> Top Rated Restaurants
                </button>
            </div>
                
            </div>
            <div className='res-container flex flex-wrap'>
            {listOfRestaurants.map(restaurant  => (
             <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
               { restaurant.info.isOpen ? ( <RestaurantCardOpen  resData={restaurant} /> ) : (
               <RestaurantCard  resData={restaurant} /> ) }
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Body;