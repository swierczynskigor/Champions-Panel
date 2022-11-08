import { createSlice } from '@reduxjs/toolkit'

const rolesSlice = createSlice({
      name: 'roles',
      initialState: { items: [] },
      reducers: {
            toggle(state) {
                  state.cartIsVisible = !state.cartIsVisible
            },
            getRoles(state, action) {
                  state.items = [...action.payload.items]
            }
      }
})

export const rolesActions = rolesSlice.actions

export default rolesSlice