import * as React from "react";
import * as actions from "../actions/index";
import { StoreState, ITeam, IPlayer } from "../types/interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { Player } from "./Player";

interface IPropsFromState {
  teamWhite: ITeam;
  teamBlue: ITeam;
  players: IPlayer[];
}

interface IPropsWithDispatch {
  onWhiteScore: (score: number) => void;
  onBlueScore: (score: number) => void;
  onAddPlayer: (player: IPlayer) => void;
}

type Props = IPropsFromState & IPropsWithDispatch;

class AppComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { teamWhite, teamBlue, players, onAddPlayer } = this.props;
    return (
      <div>
        <h1>Foos-app</h1>
        <div className="positionPlayerButtons">
          {players.map(player => (
            <Player player={player} onAddPlayer={onAddPlayer} />
          ))}
        </div>
        <div>
          <h3>White Team</h3>
          <span>
            {teamWhite.player1} {teamWhite.player2}
          </span>
          <h3>Blue Team</h3>
          <span>
            {teamBlue.player1} {teamBlue.player2}
          </span>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ foos }: StoreState): IPropsFromState {
  return {
    teamWhite: foos.teamWhite,
    teamBlue: foos.teamBlue,
    players: foos.players
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.FoosAction>
): IPropsWithDispatch {
  return {
    onWhiteScore: score => dispatch(actions.whiteScore(score)),
    onBlueScore: score => dispatch(actions.blueScore(score)),
    onAddPlayer: player => dispatch(actions.addPlayer(player))
  };
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
