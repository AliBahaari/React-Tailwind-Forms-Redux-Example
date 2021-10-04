import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    family: '',
    age: 0,
    gender: '',
    status: false
}

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {

        sumbitFormAction: (state, action) => {
            state.name = action.payload.name;
            state.family = action.payload.family;
            state.age = action.payload.age;
            state.gender = action.payload.gender;
            state.status = action.payload.status;
        }

    }
});

export const {sumbitFormAction} = formSlice.actions;
export default formSlice.reducer;