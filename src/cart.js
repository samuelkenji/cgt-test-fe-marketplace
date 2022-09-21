

const Cart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    console.log(cartItems)
    return (
        <div>
              Are you ready to purchase these?

              <ul>
                {cartItems.map((cartItem) => <li key={cartItem}>{cartItem.name}</li>)}
              </ul>
        </div>
    )
};

export default Cart;