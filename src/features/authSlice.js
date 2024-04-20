import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URI} from '../../config/keys-dev';

const initialState ={
    userId:'',
    name: '',
    mobile: '',
    email: '',
    password: '',
    status: 'idle',
    error: null
}

// Handle POST request to create a new account
export const signup = createAsyncThunk(
    // The name of the action
    'auth/signup',
    // The payload creator
    async (initialData, thunkAPI) => {
      try {
        //const res = await axios.post(url, initialData)
        const res = await axios.post(`${BASE_URI}api/users/register`, initialData)
        return res.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
    }
  )

  export const signin = createAsyncThunk(
    'auth/signin',
    async (initialData, thunkAPI) => {
      try {
        //const res = await axios.post(url, initialData)
        const res = await axios.post(`${BASE_URI}api/admin/login`, initialData)
        console.log(res,"axiiiiiios")
        //data axios, backend 2 data
        return res.data.data.data.data
      } catch (err) {
        // console.log(err,"errrxxx,,,,axiiiiiios")
        return thunkAPI.rejectWithValue(err)
      }
    }
  )

  export const getUser = createAsyncThunk(
    'auth/getUser',
    async (initialData, thunkAPI) => {
      try {
        console.log(initialData,"guuuuuuuuuuuuuuuuuuuuuuuu")
        //const res = await axios.post(url, initialData)
        const res = await axios.get(`${BASE_URI}api/users/gu/${initialData}`)
       // console.log(res,"axiiiiiios")
        //data axios, backend 2 data
        return res.data.data.data
      } catch (err) {
        // console.log(err,"errrxxx,,,,axiiiiiios")
        return thunkAPI.rejectWithValue(err)
      }
    }
  )

  export const signout = createAsyncThunk(
    'auth/signout',
    async () => {
      localStorage.removeItem("atoken")
    //   localStorage.removeItem('_i')
    //   localStorage.removeItem('_n')
    //   localStorage.removeItem('_e')
    //   localStorage.removeItem('_m')
      return null;  // Indicate successful logout (you can return any data here)
    }
  )

const authSlice =createSlice({
    name:"auth",
    initialState,
    reducer:{},// Add reducers for the synchronous actions on the UI[we are not using this property for this tutorial]
    // extraReducers:{
    //     [signup.fulfilled]: (state, action) => {
    //         // Add the new post created on the UI to the existing posts
    //         state.name=action.payload.name,
    //         state.mobile=action.payload.mobile,
    //         state.email=action.payload.email
    //     },   
    // },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state, action) => {
            state.name=action.payload.name,
            state.mobile=action.payload.mobile,
            state.email=action.payload.email
        })
        .addCase(signin.fulfilled,(state,action)=> {
          console.log(action.payload,"addcase")
            state.userId=action.payload._id,
            state.name=action.payload.name
        })
        .addCase(signout.fulfilled, (state, action) => {
          // Clear user data on successful logout (optional)
          state.userId = '';
          state.name = '';
          state.mobile = '';
          state.email = '';
          state.status = 'idle'; // Reset status to idle
        })
        .addCase(getUser.fulfilled,(state,action)=> {
          state.userId=action.payload._id,
          state.name=action.payload.name,
          state.mobile=action.payload.mobile,
          state.email=action.payload.email,
          state.firstPaymentStatus=action.payload.firstPaymentStatus,
          state.secondPaymentStatus=action.payload.secondPaymentStatus,
          state.bankDetailsStatus=action.payload.bankDetailsStatus,
          state.ref_upiId=action.payload.ref_upiId,
          state.ref_uMobile=action.payload && action.payload.ref_uMobile,
          state.ref_ifsc=action.payload && action.payload.ref_ifsc,
          state.ref_accNo=action.payload && action.payload.ref_accNo,
          state.ref_node=action.payload.ref_node,
          state.firstPaymentApprovel=action.payload.firstPaymentApprovel
      })
       
      },
})
export default authSlice.reducer
