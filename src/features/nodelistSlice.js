import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URI} from '../config/keys-dev';

const initialState ={
  userId:"",
  ref_upiId:"1",
  isMaturedNode:false,
  maturedNode:[],
  name:"",
  mobile:"",
  nodeId:0,
  ref_node:"",
  ref_node_code:0,
  message:""
}

// Handle POST request to create a new account  /fpay
export const fPay = createAsyncThunk(
  // The name of the action
  'nodelist/fPay',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/fPay",initialData)
      //const res = await axios.post(url, initialData)
      const res = await axios.post(`${BASE_URI}api/users/fpay`, initialData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }})
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)

export const sPay = createAsyncThunk(
  // The name of the action
  'nodelist/sPay',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/sPay",initialData)
      const res = await axios.post(`${BASE_URI}api/users/spay`, initialData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }})
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)

export const sApprove = createAsyncThunk(
  // The name of the action
  'nodelist/sApprove',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/sApprove",initialData)
      const res = await axios.post(`${BASE_URI}api/users/sapprove`, initialData)
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)
export const sReject = createAsyncThunk(
  // The name of the action
  'nodelist/sReject',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/sReject",initialData)
      const res = await axios.post(`${BASE_URI}api/users/sreject`, initialData)
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)
export const fRetry = createAsyncThunk(
  // The name of the action
  'nodelist/fRetry',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/fRetry",initialData)
      const res = await axios.post(`${BASE_URI}api/users/fretry`, initialData)
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)
export const sRetry = createAsyncThunk(
  // The name of the action
  'nodelist/sRetry',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/sRetry",initialData)
      const res = await axios.post(`${BASE_URI}api/users/sretry`, initialData)
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)

export const rejCmp=createAsyncThunk(
  // The name of the action
  'nodelist/rejCmp',
  // The payload creator
  async (initialData, thunkAPI) => {
    try {
      console.log("nodelist/rejCmp",initialData)
      //const res = await axios.post(url, initialData)
      const res = await axios.post(`${BASE_URI}api/users/rejCmp`, initialData)
      console.log("+++++++++++++++++++axiiiiiios")
      console.log(res,"axiiiiiios")
      console.log("-----------------axiiiiiios")
      console.log("++++++++daa+++++++++++axiiiiiios")
      console.log(res.data,"axiiiiiios")
      console.log("---------data--------axiiiiiios")
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)
export const addNode = createAsyncThunk(
    // The name of the action
    'nodelist/addNode',
    // The payload creator
    async (initialData, thunkAPI) => {
      try {
        console.log("nodelist/addNode",initialData)
        //const res = await axios.post(url, initialData)
        const res = await axios.post(`${BASE_URI}api/users/addnode`, initialData)
        console.log("+++++++++++++++++++axiiiiiios")
        console.log(res,"axiiiiiios")
        console.log("-----------------axiiiiiios")
        console.log("++++++++daa+++++++++++axiiiiiios")
        console.log(res.data,"axiiiiiios")
        console.log("---------data--------axiiiiiios")
        return res.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
    }
  )

  export const signin = createAsyncThunk(
    'nodelist/signin',
    async (initialData, thunkAPI) => {
      try {
        //const res = await axios.post(url, initialData)
        const res = await axios.post(`${BASE_URI}api/users/login`, initialData)
        console.log(res,"axiiiiiios")
        //data axios, backend 2 data
        return res.data.data.data
      } catch (err) {
        console.log(err,"errrxxx,,,,axiiiiiios")
        return thunkAPI.rejectWithValue(err)
      }
    }
  )

const nodelistSlice =createSlice({
    name:"nodelist",
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
        builder.addCase(addNode.fulfilled, (state, action) => {
            state.name=action.payload.name;
            state.mobile=action.payload.mobile;
            state.ref_upiId=action.payload.ref_upiId;
            state.isMaturedNode=action.payload.isMaturedNode;
            state.maturedNode=action.payload.maturedNode;
            state.nodeId=action.payload.nodeId;
            state.ref_node=action.payload.ref_node;
            state.ref_node_code=action.payload.ref_node_code;
            state.ref_upiId=action.payload.ref_upiId;
        })
        .addCase(fPay.fulfilled,(state,action)=> {
          state.message=action.payload;
          
        }).addCase(rejCmp.fulfilled,(state,action)=> {
          console.log(action,"actionnnnnnnnnnnn")
          state.message=action.payload;
          
        }).addCase(sApprove.fulfilled,(state,action)=> {
          console.log(action,"actionnnnnnnnnnnn")
          state.message=action.payload;
          
        }).addCase(sReject.fulfilled,(state,action)=> {
          console.log(action,"actionnnnnnnnnnnn")
          state.message=action.payload;
          
        }).addCase(sRetry.fulfilled,(state,action)=> {
          console.log(action,"actionnnnnnnnnnnn")
          state.message=action.payload;
          
        }).addCase(fRetry.fulfilled,(state,action)=> {
          console.log(action,"actionnnnnnnnnnnn")
          state.message=action.payload;
          
        })
       
      },
})
export default nodelistSlice.reducer
