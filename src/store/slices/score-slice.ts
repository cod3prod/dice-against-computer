import { createSlice } from "@reduxjs/toolkit";

const initialState: ScoreState = {
    targetScore: 5,
    myScore: 0,
    comScore: 0,
    checkReset: false,
}

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        setTargetScore: (state, action) => {
            state.targetScore = action.payload;
        },
        updateScore: (state, action) => {
            state.myScore = action.payload.myScore;
            state.comScore = action.payload.comScore;
        },
        resetScore: (state) => {
            state.myScore = 0;
            state.comScore = 0;
            state.targetScore = 5;
            state.checkReset = !state.checkReset;
        },
    }
})

export const { setTargetScore, updateScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
