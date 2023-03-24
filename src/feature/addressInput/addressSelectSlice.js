import { createSlice } from '@reduxjs/toolkit'

export const addressSelectSlice = createSlice({
  name: 'CARRY_OUT',
  initialState: {
    value: '',
  },
  reducers: {
    storeAddress: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { storeAddress } = addressSelectSlice.actions

export default addressSelectSlice.reducer
