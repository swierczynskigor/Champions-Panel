import { createSlice } from '@reduxjs/toolkit'

const championSlice = createSlice({
      name: 'champions',
      initialState: { champions: [] },
      reducers: {
            getChampion(state, action) {
                  state.champions = [...action.payload.champions]
            }
      }
})

export const championActions = championSlice.actions

export default championSlice