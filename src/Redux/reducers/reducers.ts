import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';

export const initialState: InitialState = {
  isLoginSuccess: false,
  newUserModalVisble: false,
  users: {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    avatar: '',
  },
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoginSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoginSuccess = action.payload;
    },
    setNewUserModal: state => {
      state.newUserModalVisble = !state.newUserModalVisble;
    },
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
  extraReducers: builder => {
    builder;
  },
});

export const {setIsLoginSuccess, setNewUserModal, setUsers} = reducer.actions;

export default reducer.reducer;
