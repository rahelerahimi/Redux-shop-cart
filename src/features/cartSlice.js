import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartData: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : [],
  carQuantity: 0,
  carTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const itemIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartData[itemIndex].count += 1;
        // alert(`${state.cartData[itemIndex].text} increament`)
      } else {
        const tempProduct = { ...action.payload, count: 1 };
        state.cartData.push(tempProduct);
        Swal.fire({
          title: `${action.payload.text} `,
          text: "added to cart",
          icon: "success",
          confirmButtonText: "ok",
        });
      }

      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    removeProduct(state, action) {
      const nextCartItem = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartData = nextCartItem;

      Swal.fire({
        title: `${action.payload.text} `,
        text: "removed from cart",
        icon: "error",
        confirmButtonText: "ok",
      });
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    decreaceCart(state, action) {
      const itemIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartData[itemIndex].count > 1) {
        state.cartData[itemIndex].count -= 1;
      } else if (state.cartData[itemIndex].count === 1) {
        const nextCartItem = state.cartData.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartData = nextCartItem;
      }
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    clearCart(state, action) {
      state.cartData = [];
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
  },
});

export const { addCart, removeProduct, decreaceCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
