import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReduser = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReduser,
  (user) => user.currentUser
);
