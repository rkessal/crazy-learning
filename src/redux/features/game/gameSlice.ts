import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TPlayer } from '../../../config/types'
import { RootState } from '../../store'
import { player1 } from '../../../mocks/player'

const initialState = {
  isPlayerSet: false
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state: typeof initialState, action: PayloadAction<boolean>) => {
      return {
        isPlayerSet: action.payload
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { setPlayer } = game.actions
export const selectIsPlayerSet = (state: RootState) => state.game.isPlayerSet


export default game.reducer