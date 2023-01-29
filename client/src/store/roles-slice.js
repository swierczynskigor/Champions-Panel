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
    addBuildToChamp(state, action) {
      const champToModify = state[action.payload.role].find(
        (champ) => champ.name === action.payload.name
      );
      champToModify.builds.push(action.payload.indexOfBuild);
      state[action.payload.role][
        state[action.payload.role]
          .map((champ) => champ.name)
          .indexOf(action.payload.name)
      ] = champToModify;
    },
    removeBuildFromChampion(state, action) {
      const builds = [
        ...state[action.payload.role].find(
          (champ) => champ.name === action.payload.name
        ).builds,
      ];

      state[action.payload.role][
        state[action.payload.role]
          .map((champ) => champ.name)
          .indexOf(action.payload.name)
      ].builds = [
        ...builds.filter(
          (buildIdx) => buildIdx !== action.payload.indexOfBuild
        ),
      ];
    },
  },
});

export const rolesActions = rolesSlice.actions;

export default rolesSlice;
