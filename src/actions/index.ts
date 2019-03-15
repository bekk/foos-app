import { IPlayer } from "../types/interfaces";

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
export type FoosAction = WhiteScore | BlueScore | AddPlayer;

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
