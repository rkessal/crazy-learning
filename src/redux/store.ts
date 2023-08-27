import { configureStore } from '@reduxjs/toolkit'
import supportsReducer from './features/module/supportsSlice'
import modulesReducer from './features/module/modulesSlice'
import playerReducer from './features/player/playerSlice'
import gameReducer from './features/game/gameSlice'

export const store = configureStore({
  reducer: {
    modules: modulesReducer,
    supports: supportsReducer,
    player: playerReducer,
    game: gameReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch