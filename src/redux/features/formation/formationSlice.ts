import { RootState } from '../../store'
import { getFormation } from '../../../api/formation'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  formation: {},
  status: null
}

export const fetchFormation = createAsyncThunk('fetchFormation', async (formationId: string) => {
  const formation = await getFormation(formationId)
  return formation.data
})

export const formation = createSlice({
  name: 'formation',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFormation.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFormation.fulfilled, (state, action) => {
        const { payload } = action
        state.status = 'success'
        state.formation = payload
      })
      .addCase(fetchFormation.rejected, (state, action) => {
        const { error } = action
        state.status = 'error'
        state.error = error
      })
  },
})

export const selectFormation = ({ formation }: RootState) => formation

export default formation.reducer