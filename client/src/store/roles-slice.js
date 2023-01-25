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
    getRoles(state, action) {
      action.payload.roles.forEach((role) => {
        console.log(role);
        state[role.role] = [...role.champions];
      });
    },
    addToRole(state, action) {
      state[action.payload.role].push(action.payload.champ);
    },
    removeFromRole(state, action) {
      state[action.payload.role] = [
        ...state[action.payload.role].filter(
          (champ) => champ.name !== action.payload.name
        ),
      ];
    },
  },
});

export const rolesActions = rolesSlice.actions;

export default rolesSlice;
