import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './CartSlice'
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store