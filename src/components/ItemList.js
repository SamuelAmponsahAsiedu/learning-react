import { CDN_URL } from "../utils/constants"

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-10/12">
                    <div className="py-2">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price ? 
                            item.card.info.price / 100 :
                            item.card.info.defaultPrice / 100}
                        </span>
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute mx-16">
                        <button className="p-2 bg-green-400 shadow-lg  m-auto text-white">ADD +</button>
                        </div>
                        <img className="w-auto h p-1" src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
 
    )
}

export default ItemList;