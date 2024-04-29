import { createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'


export const CreateTask=createAsyncThunk('/newtask',async(data,{rejectWithValue,dispatch})=>{
    try {
        const res=await axios.post("http://localhost:8088/api/task/post",data,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
dispatch(GetTask())
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
        
    }
})

export const DeleteTask=createAsyncThunk(`/delete/`,async(data,{rejectWithValue,dispatch})=>{
    try {
        const res=await axios.delete(`http://localhost:8088/api/task/delete/${data}`,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
dispatch(GetTask())
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
        
    }
})

export const GetTask=createAsyncThunk('/GettAllTask',async(data,{rejectWithValue})=>{
    try {
        const res=await axios.get("http://localhost:8088/api/task/get",{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
        
    }
})




const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        taskData:[],
        error:null,
        loading:false
    },
    extraReducers:(builder)=>{
        builder.addCase(CreateTask.pending,(state)=>{
            state.loading=true

        })
        .addCase(CreateTask.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null


        }  )
        .addCase(CreateTask.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            
        
        })

        .addCase(GetTask.pending,(state)=>{
            state.loading=true

        })
        .addCase(GetTask.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null
            state.taskData=action.payload.tasks
        }  )
        .addCase(GetTask.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            
        
        })
    }
})

export default taskSlice.reducer