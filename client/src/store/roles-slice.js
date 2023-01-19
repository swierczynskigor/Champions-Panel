import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    top: [],
    jungle: [],
    mid: [],
    bot: [],
    support: [],
    duobot: [],
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    addToRole(state, action) {
      state[action.payload.role].push(action.payload.champ);
    },
  },
});

export const rolesActions = rolesSlice.actions;

export default rolesSlice;
