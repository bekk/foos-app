export interface ITeam {
  player1: IPlayer;
  player2: IPlayer;
  score: number;
}

interface IMatch {
  teamWhite: ITeam;
  teamBlue: ITeam;
}

export interface IFoosState {
  teamWhite: ITeam;
  teamBlue: ITeam;
  players: IPlayer[];
}

export interface IIndividualScores {
  name: string;
  matchScores: number[];
  meanScore: number;
}

export type IPlayer = string;

export type StoreState = { foos: IFoosState };
