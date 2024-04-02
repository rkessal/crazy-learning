import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { EGameState } from '../../../config/types'

const initialState = {
  isPlayerSet: false,
  currentState: EGameState.MENU_MAIN,
  promptSubmodule: {
    id: null,
    state: false
  },
  app: null
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state: typeof initialState, { payload }: PayloadAction<boolean>) => {
      state.isPlayerSet = payload
    },

    setCurrentState: (state: typeof initialState, { payload }: PayloadAction<EGameState>) => {
      state.currentState = payload
    },

    setApp: (state: typeof initialState, { payload }: PayloadAction<any>) => {
      state.app = payload
    },

    promptSubModule: (state: typeof initialState, { payload }: PayloadAction<string>) => {
      state.promptSubmodule = {
        id: payload,
        state: true
      }
    },

    removePromptSubModule: (state: typeof initialState) => {
      state.promptSubmodule = {
        id: null,
        state: false
      }
    },

  }
})

// Action creators are generated for each case reducer function
export const { setPlayer, setCurrentState, setApp, promptSubModule, removePromptSubModule } = game.actions
export const selectIsPlayerSet = (state: RootState) => state.game.isPlayerSet
export const selectGame = (state: RootState) => state.game


export default game.reducer