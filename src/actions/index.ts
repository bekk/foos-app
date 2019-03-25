import { IPlayer, ITeam } from "../types/interfaces";

export interface WhiteScore {
  type: "WHITE_SCORE";
  score: number;
}

export interface BlueScore {
  type: "BLUE_SCORE";
  score: number;
}

export interface AddPlayer {
  type: "ADD_PLAYER";
  player: IPlayer;
}

export interface RemovePlayer {
  type: "REMOVE_PLAYER";
  player?: IPlayer;
}

export interface GetALLPlayers {
  type: "GET_ALL_PLAYERS";
  players: IPlayer[];
}



export type FoosAction =
  | WhiteScore
  | BlueScore
  | AddPlayer
  | RemovePlayer
  | GetALLPlayers;

export function whiteScore(score: number): WhiteScore {
  return {
    type: "WHITE_SCORE",
    score
  };
}

export function blueScore(score: number): BlueScore {
  return {
    type: "BLUE_SCORE",
    score
  };
}

export function addPlayer(player: IPlayer): AddPlayer {
  return {
    type: "ADD_PLAYER",
    player
  };
}

export function removePlayer(player: IPlayer): RemovePlayer {
  return {
    type: "REMOVE_PLAYER",
    player
  };
}

export function getAllPlayers(players: IPlayer[]): GetALLPlayers {
  return {
    type: "GET_ALL_PLAYERS",
    players
  };
}
