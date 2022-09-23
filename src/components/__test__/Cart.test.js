import { fireEvent, render, screen } from '@testing-library/react';
import Cart from '../Cart';
import App, { removeFromCart } from '../../App';

describe("Remove item from cart", () => {
    test('renders cart', () => {
        render(<Cart removeFromCart={removeFromCart}/>)
        const total = screen.getByText("Total");
        expect(total).toBeInTheDocument();
    });

    /* test('removes item from cart', () => {
        render(<Cart removeFromCart={removeFromCart}/>)
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        if(!cartItems || cartItems.length === 0){
            const text = screen.getByText("No products inside the cart");
            expect(text).toBeInTheDocument();
        }else{
            const text = screen.getByText("Are you ready to purchase these?");
            expect(text).toBeInTheDocument();
        }
        
    }); */
})