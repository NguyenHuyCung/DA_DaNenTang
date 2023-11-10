import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../screens/store/app';
import {Reducer} from 'redux';

interface signUpState {
  email: string;
  name: string;
  class: string;
  phone: string;
  address:string;
  ticketNoon: boolean;
  ticketEvening: boolean;
}

const initialState: signUpState = {
  email: '',
  name: '',
  class: '',
  phone: '',
  ticketNoon: false,
  ticketEvening: false,
  address:''
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setEmailRedux: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setClass:(state, action: PayloadAction<string>) => {
      state.class = action.payload;
    },
    setPhone:(state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    
    setticketNoon:(state, action: PayloadAction<boolean>) => {
      state.ticketNoon = action.payload;
    },
    setticketEvening:(state, action: PayloadAction<boolean>) => {
      state.ticketEvening = action.payload;
    },
    setAddress:(state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const {
  setEmailRedux,
  setName,
  setClass,
  setPhone,
  setticketNoon,
  setAddress,
  setticketEvening
} = signUpSlice.actions;
// export const selectCount = (state: RootState) => state.login.loggedIn;
export default signUpSlice.reducer;
