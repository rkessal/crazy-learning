import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { TModule, TSupport } from '../../../config/types'
import { RootState } from '../../store'
import { modules } from '../../../mocks/modules'

const initialState: TModule[] = modules

export const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setModules: (state: TModule[], action: PayloadAction<TModule[]>) => {
      return action.payload
    },
    setFound: (state: TModule[], action: PayloadAction<string>) => {
      state.forEach((module) => {
        module.supports.forEach(support => {
          if (support.id === action.payload) support.found = true
          return
        })
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFound, setModules } = modulesSlice.actions
export const selectModules = (state: RootState) => state.modules
export const selectSupports = (state: RootState, moduleId: string) => state.modules.filter(module => module.id = moduleId).map(module => module.supports)
export const selectFoundSupportsCount = createSelector(
  [selectModules],
  (modules) => {
    let foundSupportsCount = 0;
    modules.forEach((module) => {
      foundSupportsCount += module.supports.filter((support) => support.found === true).length;
    });
    return foundSupportsCount;
  }
);


export default modulesSlice.reducer