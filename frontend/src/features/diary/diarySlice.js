import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import diaryService from './diaryService'

const initialState = {
    diary: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

  export const createEntry = createAsyncThunk(
  'diary/create',
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
    },
    extraReducers: (builder) => {
        builder
          .addCase(createEntry.pending, (state) => {
            state.isLoading = true
          })
          .addCase(createEntry.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.diary.push(action.payload)
          })
          .addCase(createEntry.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
        },
  })


  export const { reset } = diarySlice.actions
  export default diarySlice.reducer