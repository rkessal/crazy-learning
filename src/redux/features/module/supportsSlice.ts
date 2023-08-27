import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { TSupport } from '../../../config/types'
import { RootState } from '../../store'

const initialState: TSupport[] = []

export const supportsSlice = createSlice({
  name: 'supports',
  initialState,
  reducers: {
    setSupports: (state: TSupport[], action: PayloadAction<TSupport[]>) => {
      return action.payload
    },
    setFound: (state: TSupport[], action: PayloadAction<string>) => {
      state.forEach((support) => {
        if (support.id === action.payload) support.found = true
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFound, setSupports } = supportsSlice.actions
export const selectSupports = (state: RootState) => state.supports
export const selectFoundSupports = createSelector([selectSupports], (supports) => supports.filter(support => support.found))

export default supportsSlice.reducer