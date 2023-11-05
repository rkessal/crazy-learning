import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { EGameState } from '../../../config/types'

const initialState = {
  isPlayerSet: false,
  currentState: EGameState.MENU_MAIN
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state: typeof initialState, action: PayloadAction<boolean>) => {
      state.isPlayerSet = action.payload
    },

    setCurrentState: (state: typeof initialState, action: PayloadAction<EGameState>) => {
      state.currentState = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setPlayer, setCurrentState } = game.actions
export const selectIsPlayerSet = (state: RootState) => state.game.isPlayerSet
export const selectGame = (state: RootState) => state.game


export default game.reducer