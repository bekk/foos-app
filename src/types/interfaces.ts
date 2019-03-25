export interface ITeam {
  players: IPlayer[];
  score: number;
}

export interface ITeamContract {
  Players: IPlayer[];
  Score: number;
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

export interface IPlayerId {
  name: IPlayer;
  employeeId: number;
}

export type StoreState = { foos: IFoosState };

export interface IMatchContract {
  WhiteTeam: ITeamContract;
  BlueTeam: ITeamContract;
}
