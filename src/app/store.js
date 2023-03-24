import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import addressInputSlice from '../feature/addressInput/addressInputSlice'
import addressSelectSlice from '../feature/addressInput/addressSelectSlice'
import cartItemSlice from '../feature/cartItem/cartItemSlice'
import Modal from '../feature/modal/Modal'

const reducers = combineReducers({
  DELIVERY: addressInputSlice,
  CARRY_OUT: addressSelectSlice,
  IS_MODAL_OPEN: Modal,
  CART_ITEM: cartItemSlice,
})

const persitConfig = {
  key: 'root',
  storage,
}
const persitedReducer = persistReducer(persitConfig, reducers)

const store = configureStore({
  reducer: persitedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store
