import { configureStore } from '@reduxjs/toolkit'
import modulesReducer from './features/module/modulesSlice'
import playerReducer from './features/player/playerSlice'
import gameReducer from './features/game/gameSlice'
import levelReducer from './features/level/levelSlice'

export const store = configureStore({
  reducer: {
    modules: modulesReducer,
    player: playerReducer,
    game: gameReducer,
    level: levelReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch