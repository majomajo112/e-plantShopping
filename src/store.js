import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import reducers from './CartSlice'
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store