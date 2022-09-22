import {FaTrashAlt} from 'react-icons/fa';



const Cart = ({removeFromCart}) => {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    console.log(cartItems)
    return (
        <div>
              {cartItems.length > 0 ? 'Are you ready to purchase these?' : 'No products inside the cart'}

              <div>
                {cartItems.map((cartItem, index) => {
                    return(
                        <div key={'item_'+index} className="cartItems">
                            <p key={cartItem}>{cartItem.name}</p>
                            <div className='price'>
                                <p>{cartItem.price} USD</p>
                                <FaTrashAlt onClick={() => {removeFromCart(index)}}/>
                            </div>
                        </div>
                    )
                })}
              </div>

              <div className="total">
                <h2>Total</h2>
                {cartItems.reduce((sum, current) => sum += parseFloat(current.price), 0) + " USD"}
              </div>
        </div>
    )
};

export default Cart;