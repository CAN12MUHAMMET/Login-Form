import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    password: '',
    date : "",
    email : "" ,
    isLogedin : false ,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    SetDate: (state, action) => {
      state.date = action.payload;
    },
    SetEmail: (state, action) => {
      state.email = action.payload;
    },
    login : (state) =>{
      state.isLogedin = true ;
    },
    logOut : (state) =>{
      state.isLogedin = false ;
    },
  },
});

export const { setUsername , setPassword , SetDate , SetEmail , login , logOut } = userSlice.actions;
export default userSlice.reducer;
