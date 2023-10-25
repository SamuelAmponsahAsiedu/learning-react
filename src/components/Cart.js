import {useSelector, useDispatch} from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black rounded-lg text-white" onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                <h1 className='text-center font-semibold italic m-10'>No items in cart. Please add items!</h1>)}
            </div>
            <ItemList items={cartItems} />
        </div>
    )
}

export default Cart;