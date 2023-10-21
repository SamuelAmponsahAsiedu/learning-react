import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {

    const{resData} = props;
    const{cloudinaryImageId, name, avgRating, cuisines, costForTwoMessage, costForTwo} = resData?.info
    const{deliveryTime} = resData?.info?.sla
    return(
        <div className='res-card'>
            <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoMessage || costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;