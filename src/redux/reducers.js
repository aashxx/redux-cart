import { createReducer } from "@reduxjs/toolkit";

// Cart Reducers
export const cartReducer = createReducer(

    // Initial Redux states for product items and price details
    {
        cartItems: [],
        subtotal: 0,
        shipping: 0,
        tax: 0,
        total: 0
    }, 

    // Reducers
    {
        // Add to Cart and increment quantity
        addToCart: (state, action) => {
            const item = action.payload;
            const itemExists = state.cartItems.find(i => i.id === item.id);
            if(itemExists) {
                state.cartItems.forEach(i => {
                    if(i.id === item.id) {
                        i.quantity += 1
                    }
                })
            } else {
                state.cartItems.push(item);
            }
        },

        // Decrement Quantity
        decrement: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if(item.quantity > 1) {
                state.cartItems.forEach(i => {
                    if(i.id === item.id) {
                        i.quantity -= 1
                    }
                })
            }
        },

        // Delete from cart
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        },

        // Calculate overall price
        calculatePrice: (state) => {
            let sum = 0;
            state.cartItems.map(i => (sum += i.price * i.quantity));
            state.subtotal = sum;
            state.shipping = state.subtotal > 1000 ? 0 : 200;
            state.tax = +(state.subtotal * 0.18).toFixed(2);
            state.total = state.subtotal + state.shipping + state.tax;
        }
    }
);