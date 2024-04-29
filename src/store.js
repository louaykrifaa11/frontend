import {configureStore} from '@reduxjs/toolkit'
import userSlice from './redux/slices/userSlice'
import taskSlice from './redux/slices/taskSlice'







export default configureStore({reducer:{user:userSlice,task:taskSlice}})