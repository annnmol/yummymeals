import { auth } from "./../../services/authServices/Firebase";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { User } from "firebase/auth";

interface Props {
  authUser: User | null;
}

let INITIAL_STATE: Props = {
  authUser: null,
};

const AuthUserSlice = createSlice({
  name: "AuthUserSlice",
  initialState: INITIAL_STATE,
  reducers: {
    ChangeAuthUserSlice(state, { payload }: PayloadAction<Props>) {
      console.log("ChangeAuthUserSlice", payload);
      return payload;
    },
    RemoveAuthUserSlice() {
      console.log(" RemoveAuthUserSlice");
      return INITIAL_STATE;
    },
  },
});

export const { ChangeAuthUserSlice, RemoveAuthUserSlice } =
  AuthUserSlice.actions;
export default AuthUserSlice.reducer;

export const useAuthUserStore = (state: any) => {
  return state.currentAuthUser as Props;
};

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
