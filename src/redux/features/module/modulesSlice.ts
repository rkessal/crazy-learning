import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { TModule, TPuzzlePiece, TSupport } from '../../../config/types'
import { RootState } from '../../store'
import { modules } from '../../../mocks/modules'

const initialState: TModule[] = modules

export const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setModules: (_: TModule[], action: PayloadAction<TModule[]>) => {
      return action.payload
    },

    setFoundPuzzle: (state: TModule[], action: PayloadAction<TPuzzlePiece['id']>) => {
      state.forEach((module => {
        if (!module.puzzlePieces.length) return
        const puzzle = module.puzzlePieces.find(puzzle => puzzle.id === action.payload)
        if (puzzle) puzzle.found = true

        setModuleCompleted(module)
      }))
    },
    setFound: (state: TModule[], action: PayloadAction<TSupport['id']>) => {
      state.forEach((module) => {
        const supportToUpdate = module.supports.find((support) => support.id === action.payload)

        if (supportToUpdate && !supportToUpdate.found) {
          supportToUpdate.found = true
          module.lastFoundSupport = supportToUpdate
        }

        setModuleCompleted(module)
      })
    },
  }
})

const setModuleCompleted = (module: TModule) => module.completed = module.supports.every(support => support.found) && module.puzzlePieces.every(puzzle => puzzle.found)

export const { setFound, setFoundPuzzle, setModules } = modulesSlice.actions
export const selectModules = (state: RootState) => state.modules
export const selectModule = (moduleId: TModule['id']) => (state: RootState) => state.modules.find(module => module.id === moduleId)
export const selectSupports = (state: RootState, moduleId: string) => state.modules.find(module => module.id === moduleId).supports
export const selectLastFoundSupport = (moduleId: TModule['id']) => (state: RootState) => state.modules.find(module => module.id === moduleId).lastFoundSupport
export const selectPuzzlePiece = (puzzlePieceId: TPuzzlePiece['id']) => (state: RootState) =>
  state.modules.flatMap((module) => module.puzzlePieces)
    .find((puzzle) => puzzle.id === puzzlePieceId) || null
export const selectFoundSupportsCount = createSelector(
  [selectModules],
  (modules) => {
    return modules.reduce((accumulator, module) => {
      return accumulator + module.supports.filter((support) => support.found === true).length;
    }, 0);
  }
);


export default modulesSlice.reducer