import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk(
  "getProducts",
   async function (_,{dispatch})
   {
      const responsed = await fetch ("https://fakestoreapi.com/products/")
      const data = await responsed.json()
      dispatch(getProductTwo(data))
   }
)

const postSlice = createSlice({
  name: "productsreducer",
  initialState: {
      products: []
  },
  reducers: {
      getProductTwo: (state, action) => {
          state.products = action.payload
      }
  }

});

export const {getProductTwo} = postSlice.actions;
export default postSlice.reducer;
