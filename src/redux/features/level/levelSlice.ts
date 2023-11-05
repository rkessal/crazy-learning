import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TLevel, TLevels } from '../../../config/types'
import { RootState } from '../../store'
import { levels } from '../../../mocks/level'

const initialState: TLevels = levels

export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    chooseLevel: (state: TLevels, action: PayloadAction<TLevel>) => {
      if (action.payload.unlocked) state.current = action.payload.id
    },
    unlockLevel: (state: TLevels, action: PayloadAction<TLevel['id']>) => {
      state.levels.filter(level => level.id === action.payload).map(level => level.unlocked = true)
    },
  }
})

export const { chooseLevel, unlockLevel } = levelSlice.actions
export const selectLevel = (state: RootState) => state.level
export const selectCurrentLevel = (state: RootState) => state.level.levels.find(level => level.id === state.level.current)


export default levelSlice.reducer