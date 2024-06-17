import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/products/productSlice';
import errorReducer from './slices/errors/errorSlice';

const store = configureStore({
  reducer: { products: productReducer, errors: errorReducer },
});
export default store;
