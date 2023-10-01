import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers';

// Creating redux store
const store = configureStore({

    // Adding reducers
    reducer: {
        cart: cartReducer
    }
});

export default store;