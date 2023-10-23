import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {

    const{resData} = props;
    const{cloudinaryImageId, name, avgRating, cuisines, costForTwoMessage, costForTwo} = resData?.info
    const{deliveryTime} = resData?.info?.sla
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-200' >
            <img 
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoMessage || costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export const isOpen =(RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 rounded-lg bg-green-400 text-white"  >
                    Open
                </label>
                    <RestaurantCard {...props} />
            </div>
        )
    }
}

export const isClosed =(RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 rounded-lg bg-green-400 text-white"  >
                    Closed
                </label>
                    <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;