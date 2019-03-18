import { IFoosState, IPlayer, ITeam } from "../types/interfaces";
import { FoosAction, AddPlayer, RemovePlayer } from "../actions/index";

const initialState: IFoosState = {
  players: [
    "moddaman1",
    "moddaman2",
    "moddaman3",
    "moddamdsaan4",
    "modasdddaman5"
  ],
  teamWhite: {
    players: [],
    score: 0
  },
  teamBlue: {
    players: [],
    score: 0
  }
};

function addPlayer(state: IFoosState, action: AddPlayer) {
  const remainingPlayers = state.players.filter(x => x !== action.player);
  if (state.teamWhite.players.length < 2) {
    return {
      ...state,
      teamWhite: {
        ...state.teamWhite,
        players: [...state.teamWhite.players, action.player]
      },
      players: remainingPlayers
    };
  } else if (state.teamBlue.players.length < 2) {
    return {
      ...state,
      teamBlue: {
        ...state.teamBlue,
        players: [...state.teamBlue.players, action.player]
      },
      players: remainingPlayers
    };
  }
  return state;
}

function removePlayer(state: IFoosState, action: RemovePlayer) {
  return {
    ...state,
    teamWhite: {
      ...state.teamWhite,
      players: state.teamWhite.players.filter(x => x !== action.player)
    },
    teamBlue: {
      ...state.teamBlue,
      players: state.teamBlue.players.filter(x => x !== action.player)
    },
    players: state.players.concat(action.player)
  };
}

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
      return addPlayer(state, action);
    case "REMOVE_PLAYER":
      return removePlayer(state, action);
  }
  return state;
}
