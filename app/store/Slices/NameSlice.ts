import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";


interface Props {

  name: string;
}

let INITIAL_STATE: Props = {
  name: '',

};

const NameSlice = createSlice({
  name: "NameSlice",
  initialState: INITIAL_STATE,
  reducers: {
    ChangeNameSlice(state, { payload }: PayloadAction<Props>) {
      console.log("ChangeNameSlice", payload);
      return payload;
    },
    RemoveNameSlice() {
      console.log(" RemoveNameSlice");
      return INITIAL_STATE;
    },
  },
});

export const { ChangeNameSlice, RemoveNameSlice } = NameSlice.actions;
export default NameSlice.reducer;


export const useNameStore = (state: any) => {
  return state.currentName as Props;
};



// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

