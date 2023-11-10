import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface networkState {
  ipv4Address: string
}

const initialState: networkState = {
  ipv4Address: 'http://192.168.141.113:5000/api',
}

export const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    CHANGING_NETWORK_ADDRESS: (state, action: PayloadAction<string>) => {
        state.ipv4Address = action.payload;
      }
    
  },
})

// Action creators are generated for each case reducer function
export const { CHANGING_NETWORK_ADDRESS } = networkSlice.actions

export default networkSlice.reducer