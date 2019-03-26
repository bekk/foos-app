import { IFoosState, IPlayer, ITeam, StoreState } from "../types/interfaces";
import { FoosAction, AddPlayer, RemovePlayer } from "../actions/index";

const initialState: IFoosState = {
  players: [],
  teamWhite: {
    players: [],
    score: 0
  },
  teamBlue: {
    players: [],
    score: 0
  },
  newUser: {
    name: "",
    employeeId: undefined
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
  if (action.player !== undefined) {
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
  return state;
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
    case "GET_ALL_PLAYERS":
      return {
        ...state,
        players: action.players
      };
    case "RESET_STATE":
      return {
        ...state,
        players: initialState.players,
        teamWhite: initialState.teamWhite,
        teamBlue: initialState.teamBlue,
        newUser: initialState.newUser
      };
    case "WRITE_USER_NAME":
      return {
        ...state,
        newUser: { ...state.newUser, name: action.userName }
      };
    case "WRITE_USER_ID":
      return {
        ...state,
        newUser: { ...state.newUser, employeeId: action.id }
      };
  }
  return state;
}
