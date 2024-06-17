import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setError } from '../errors/errorSlice';

const initialState = {
  products: [],
  surplusProducts: [],
  isSaleReady: false,
};
export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (url, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4000/all-products');
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProductPiece: (state, action) => {
      state.products[action.payload].quantity =
        state.products[action.payload].quantity - 1;
    },
    changeIsSaleReady: (state, action) => {
      state.isSaleReady = action.payload;
    },
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectIsSaleReady: (state) => state.isSaleReady,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {})
      .addCase(fetchProduct.fulfilled, (state, action) => {
        const maximumСapacity = 15; //can be received through configuration
        let surplusProducts = [];
        const products = action.payload.map((product) => {
          if (product.quantity > maximumСapacity) {
            const surplusProduct = {
              id: product.id,
              quantity: product.quantity - maximumСapacity,
              name: product.name,
              price: product.price,
            };
            surplusProducts.push(surplusProduct);
            let newProduct = { ...surplusProduct };
            newProduct.quantity = maximumСapacity;
            return newProduct;
          } else {
            return product;
          }
        });
        state.products = products;
        state.surplusProducts = surplusProducts;
      })
      .addCase(fetchProduct.rejected, (state, action) => {});
  },
});
export const { removeProductPiece, changeIsSaleReady } = productsSlice.actions;
export const { selectProducts, selectIsSaleReady } = productsSlice.selectors;
export default productsSlice.reducer;
