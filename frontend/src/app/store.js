import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import diaryReducer from '../features/diary/diarySlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diaries: diaryReducer,
  },
})