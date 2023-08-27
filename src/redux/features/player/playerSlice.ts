import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TPlayer } from '../../../config/types'
import { RootState } from '../../store'
import { player1 } from '../../../mocks/player'

const initialState: TPlayer = player1

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    choosePlayer: (state: TPlayer, action: PayloadAction<TPlayer>) => {
      return action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { choosePlayer } = playerSlice.actions
export const selectPlayer = (state: RootState) => state.player


export default playerSlice.reducer