import { createSlice } from '@reduxjs/toolkit'

export const Modal = createSlice({
  name: 'isOpen',
  initialState: {
    value: false,
  },
  reducers: {
    onModal: (state) => {
      state.value = true
    },
    offModal: (state) => {
      state.value = false
    },
  },
})

export const { onModal, offModal } = Modal.actions

export default Modal.reducer
