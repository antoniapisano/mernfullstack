import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import diaryService from './diaryService'

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

  export const createEntry = createAsyncThunk(
  'goals/create',
  async (diaryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await diaryService.createEntry(diaryData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

  export const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
      reset: (state) => initialState,
    }
  })


  export const { reset } = diarySlice.actions
  export default diarySlice.reducer