

const Cart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    console.log(cartItems)
    return (
        <div>
              Are you ready to purchase these?

              <div>
                {cartItems.map((cartItem) => {
                    return(
                        <div className="cartItems">
                            <p key={cartItem}>{cartItem.name}</p>
                            <p>{cartItem.price} USD</p>
                        </div>
                    )
                })}
              </div>

              <div className="total">
                <h2>Total</h2>
                {cartItems.reduce((previous, current) => parseFloat(previous.price) + parseFloat(current.price)) + " USD"}
              </div>
        </div>
    )
};

export default Cart;