import { configureStore } from '@reduxjs/toolkit'

import itemSlice from './item-slice'
import championSlice from './champion-slice'

const store = configureStore({
      reducer: { items: itemSlice.reducer, champions: championSlice.reducer }
})

export const itemActions = itemSlice.actions
export const championActions = championSlice.actions

export default store