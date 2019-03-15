import { IFoosState, IPlayer } from "../types/interfaces";
import { FoosAction } from "../actions/index";

const initialState: IFoosState = {
  players: [
    "moddaman1",
    "moddaman2",
    "moddaman3",
    "moddamdsaan4",
    "modasdddaman5"
  ],
  teamWhite: {
    player1: "",
    player2: "",
    score: 0
  },
  teamBlue: {
    player1: "",
    player2: "",
    score: 0
  }
};

export function foosReducer(
  state: IFoosState = initialState,
  action: FoosAction
): IFoosState {
  switch (action.type) {
    case "WHITE_SCORE":
      return {
        ...state,
        teamWhite: { ...state.teamWhite, score: action.score }
      };
    case "BLUE_SCORE":
      return {
        ...state,
        teamBlue: { ...state.teamBlue, score: action.score }
      };
    case "ADD_PLAYER":
      const chosenPlayers = [
        state.teamWhite.player1,
        state.teamWhite.player2,
        state.teamBlue.player1,
        state.teamBlue.player2
      ];
      if (chosenPlayers.some(x => x === action.player)) {
        return state;
      }

      if (!state.teamWhite.player1) {
        return {
          ...state,
          teamWhite: { ...state.teamWhite, player1: action.player }
        };
      } else if (!state.teamWhite.player2) {
        return {
          ...state,
          teamWhite: { ...state.teamWhite, player2: action.player }
        };
      } else if (!state.teamBlue.player1) {
        return {
          ...state,
          teamBlue: { ...state.teamBlue, player1: action.player }
        };
      } else if (!state.teamBlue.player2) {
        return {
          ...state,
          teamBlue: { ...state.teamBlue, player2: action.player }
        };
      }
      return state;
  }
  return state;
}
