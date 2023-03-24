import { createSlice } from '@reduxjs/toolkit'

export const cartItemSlice = createSlice({
  name: 'CART_ITEM',
  initialState: {
    value: [],
  },
  reducers: {
    onPlus: (state, action) => {
      const exist = state.value.find((x) => x.id === action.payload.id)
      if (exist) {
        const newCartItems = state.value.map((item) =>
          item.id === action.payload.id
            ? { ...exist, qty: exist.qty + 1 }
            : item
        )
        state.value = newCartItems
      } else {
        const newCartItems = [...state.value, { ...action.payload, qty: 1 }]
        state.value = newCartItems
      }
    },
    onMinus: (state, action) => {
      const exist = state.value.find((x) => x.id === action.payload.id)
      if (exist.qty === 1) {
        const newCartItems = state.value.filter(
          (x) => x.id !== action.payload.id
        )
        state.value = newCartItems
      } else {
        const newCartItems = state.value.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
        )
        state.value = newCartItems
      }
    },
    onRemove: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id)
    },
    onCheckOut: (state) => {
      state.value = []
    },
    onAddPizza: (state, action) => {
      const exist = state.value.find((x) => x.id === action.payload.id)
      if (exist) {
        const newCartItems = state.value.map((item) =>
          item.id === action.payload.id
            ? { ...exist, qty: exist.qty + action.payload.qty }
            : item
        )
        state.value = newCartItems
      } else {
        const newCartItems = [
          ...state.value,
          { ...action.payload, qty: action.payload.qty },
        ]
        state.value = newCartItems
      }
    },
  },
})

export const { onPlus, onMinus, onRemove, onCheckOut, onAddPizza } =
  cartItemSlice.actions

export default cartItemSlice.reducer
