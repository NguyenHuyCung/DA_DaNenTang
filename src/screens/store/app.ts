import { configureStore } from '@reduxjs/toolkit'
import networkReducer from '../../slice/networkSlice'
import listReducer from '../../slice/listSlice'
import  usersReducer  from '../../slice/infoUser'

export const store = configureStore({
  reducer: {
    network: networkReducer,
    signUp: usersReducer,
    list: listReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch