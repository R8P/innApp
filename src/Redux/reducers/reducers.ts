import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';


export const initialState: InitialState = {
 isLoginSuccess:false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoginSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoginSuccess = action.payload;
    },

  },
  extraReducers: builder => {
    builder;
   
  },
});

export const {
  setIsLoginSuccess
} = reducer.actions;

export default reducer.reducer;
