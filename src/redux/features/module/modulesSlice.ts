import { PayloadAction, createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { TModule, TPuzzlePiece, TSupport } from '../../../config/types'
import { RootState } from '../../store'
import { modules } from '../../../mocks/modules'
import axios from 'axios'
import { map } from 'lodash'

const initialState: TModule[] = modules

const apiUrl = 'https://winwinapi.natam.fr/api'
const config = {
  headers:
  {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImN0eSI6IkpXVCJ9.eyJpYXQiOjE3MDIyNDI2MTcsImV4cCI6MTcwMjI0NjIxNywicm9sZXMiOlsiUk9MRV9BUFBSRU5BTlQiLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyYXloYW5AYXBwcmVuYW50LmNvbSIsImlkIjoiMDE4YzU1NTctYmJhMS03NzEzLWEzN2UtMDgyNzU3MDk4MDhjIiwidHlwZVByb2ZpbCI6IkFQUFJFTkFOVCIsImZ1bGxuYW1lIjoiS0VTU0FMIFJheWhhbiJ9.EPR05rIhDbkqHInWiXHjw5Z6qjWktWQkIqk4QqEVw_j_eguxGjgo0xXsenSR1HKdqQsZaJfIDU_Ei9Z7fnL9pxUDvqA-TI0j9gPmJ8OnBT3NEmyed3kdnxYIYQmwjurxNq_NOj7qWafKe73wJ_whNJpb3fp5eVrhCCEDbevYzFBX_Dt8zWpXn_eYswVM3tAKsdtdgeNXKMa283wdm16Asb3fp6tnrYMDnHKIAdypvMv0KD986_b0ipdYPoDjXJ8QLdFh8sNPXVY716OyuOXHc1B9-AFr__8tf6U7fzrtEBsR9uAGHtgkquzE4pXetFtLiSIZNGe7nboeEE3a_78KP80md2EUCS9rYxz2sFayRvhtjdEpKheutZMKNubHIFs6a0jPYrBMIHLq0N6dYwapGjk-koeBlICLqNlhatLnrwNUqKvd2pIM2-kOEZkCk-ApQHbFuHr4rYb-dJv7QLPASu1Lp1s4zcS-ovXeEVOKN56nWfC0eAGko_o9PG55tPCf4SH5MzNcMfeq4x8fKGwSGQYwWydIdZGojzzxALTG-4d-lLnL0LWuFAyDROfHJJCCCj2vMl4pfbEMequcxlwOyPKdd8zaHdUFMrIdP6YwWLyqfdnY-AdVqsKeKWFZOtqN_UkTHarW4RcrsCgsNNLPjhhDLobVxidyQ0KYzZuDqaQ`
  }
}

export const fetchModules = createAsyncThunk('modules/fetchModules', async (formationId: string) => {
  const response = await axios.get(`${apiUrl}/mes-formations/${formationId}`, config)
  return response.data
})

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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchModules.fulfilled, (state, { payload }) => {
        console.log(payload)
        const test = map(payload.mesFormationContenu.modules, (module) => ({
          id: module.id,
          title: module.name,
          completed: !module.locked,
          supports: [],
          lastFoundSupport: {
            id: 'supp1',
            label: 'support 1',
            found: false,
            file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
          },
          puzzlePieces: []
        }))
        console.log(test)
        return { ...state, ...test }
      })
  },
})

const setModuleCompleted = (module: TModule) => module.completed = module.supports.every(support => support.found) && module.puzzlePieces.every(puzzle => puzzle.found)

export const { setFound, setFoundPuzzle, setModules } = modulesSlice.actions
export const selectModules = (state: RootState) => state.modules
export const selectModule = (moduleId: TModule['id']) => (state: RootState) => state.modules.find(module => module.id === moduleId)
export const selectSupports = (state: RootState, moduleId: string) => state.modules.find(module => module.id === moduleId).supports
export const selectPuzzlePieces = (moduleId: string) => (state: RootState) => state.modules.find(module => module.id === moduleId).puzzlePieces
export const selectLastFoundSupport = (moduleId: TModule['id']) => (state: RootState) => state.modules.find(module => module.id === moduleId).lastFoundSupport
export const selectAllPuzzlePiecesFound = (moduleId: TModule['id']) => (state: RootState) => state.modules
  .find(module => module.id === moduleId).puzzlePieces
  .every(puzzlePiece => puzzlePiece.found === true)

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