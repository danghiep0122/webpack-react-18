import { createSlice } from '@reduxjs/toolkit'

export const addressInputSlice = createSlice({
  name: 'DELIVERY',
  initialState: {
    value: '',
  },
  reducers: {
    delivery: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { delivery } = addressInputSlice.actions

export default addressInputSlice.reducer
