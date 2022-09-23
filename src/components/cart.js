import {FaTrashAlt} from 'react-icons/fa';
import '../styles/cart.css'

const Cart = ({removeFromCart}) => {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    console.log(cartItems)
    return (
        <div className='cart'>
            {!cartItems ? <h2>No products inside the cart</h2> :
            cartItems.length > 0 ? <h2>Are you ready to purchase these?</h2> : 
            <h2>No products inside the cart</h2>}

            <div>
            {cartItems ? cartItems.map((cartItem, index) => {
                return(
                    <div key={'item_'+index} className="cartItems">
                        <p key={cartItem}>{cartItem.name}</p>
                        <div className='price'>
                            <p>${cartItem.price}</p>
                            <div role="remove"><FaTrashAlt onClick={() => {removeFromCart(index)}}/></div>
                        </div>
                    </div>
                )
            }) : null}
            </div>

            <div className="total">
            <h2>Total</h2>
            {cartItems ? "$" + cartItems.reduce((sum, current) => sum += parseFloat(current.price), 0) : "$0"}
            </div>
        </div>
    )
};

export default Cart;