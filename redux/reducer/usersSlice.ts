import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user.interface";

export interface UsersState {
  users: IUser[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.filter(
        (user: IUser) =>
          user.name !== action.payload.name &&
          user.email !== action.payload.email
      );
    },
    resetUsers: (state) => {
      state.users = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser, resetUsers } = usersSlice.actions;

export default usersSlice.reducer;
