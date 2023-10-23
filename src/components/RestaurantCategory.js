import { useState } from "react"
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const[showItems, setShowItems] = useState()

    const handleClicked = () => {
        setShowItems(!showItems);
    }
    return (
        <div className="w-6/12  mx-auto bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClicked}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
           { showItems && <ItemList items={data.itemCards}/>}
        </div>
        
    )
}

export default RestaurantCategory;