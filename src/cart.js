

const Cart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    console.log(cartItems)
    return (
        <div>
              Are you ready to purchase these?

              <div>
                {cartItems.map((cartItem, index) => {
                    return(
                        <div key={'item_'+index} className="cartItems">
                            <p key={cartItem}>{cartItem.name}</p>
                            <p>{cartItem.price} USD</p>
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