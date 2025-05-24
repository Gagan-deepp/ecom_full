import { combineReducers, configureStore } from '@reduxjs/toolkit'
import similarSliceReducer from './Slice'
import searchItems from './SearchSlice'
import cartReducer from './Cart'
import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  similarProduct: similarSliceReducer,
  searchProduct: searchItems,
  cartProduct: cartReducer,
 
})

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)