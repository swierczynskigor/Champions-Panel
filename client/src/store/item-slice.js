import { createSlice } from '@reduxjs/toolkit'

const itemSlice = createSlice({
      name: 'ui',
      initialState: { items: [] },
      reducers: {
            toggle(state) {
                  state.cartIsVisible = !state.cartIsVisible
            },
            saveItems(state, action) {
                  state.items = [...action.payload]
            }
      }
})

export const itemActions = itemSlice.actions

export default itemSlice