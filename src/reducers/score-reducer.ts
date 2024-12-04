import { ScoreAction, ScoreState } from "@/types/score-reducer";

export const initialState: ScoreState = {
  targetScore: 5,
  myScore: 0,
  comScore: 0,
  checkReset: false,
};

export const scoreReducer = (state: ScoreState, action: ScoreAction) => {
  switch (action.type) {
    case "SET_TARGET_SCORE":
      return {
        ...state,
        targetScore: action.payload,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        myScore: action.payload.myScore,
        comScore: action.payload.comScore,
      };
    case "RESET_SCORE":
      return initialState;
    case "CHECK_RESET":
      return {
        ...state,
        checkReset: action.payload,
      };
    default:
      return state;
  }
};
