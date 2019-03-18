import * as React from "react";
import * as actions from "../actions/index";
import { StoreState, ITeam, IPlayer } from "../types/interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { Player } from "./Player";
import { SelectedPlayers } from "./SelectedPlayers";

interface IPropsFromState {
  teamWhite: ITeam;
  teamBlue: ITeam;
  players: IPlayer[];
}

interface IPropsWithDispatch {
  onWhiteScore: (score: number) => void;
  onBlueScore: (score: number) => void;
  onAddPlayer: (player: IPlayer) => void;
  onRemovePlayer: (player: IPlayer) => void;
}

type Props = IPropsFromState & IPropsWithDispatch;

class AppComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { teamWhite, teamBlue, players, onAddPlayer, onRemovePlayer } = this.props;
    return (
      <div>
        <h1>Foos-app</h1>
        <div className="positionPlayerButtons">
          {players.map(player => (
            <Player player={player} onAddPlayer={onAddPlayer} />
          ))}
        </div>
        <SelectedPlayers
          teamWhite={teamWhite}
          teamBlue={teamBlue}
          players={players}
          onRemovePlayer={onRemovePlayer}
        />
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
    onAddPlayer: player => dispatch(actions.addPlayer(player)),
    onRemovePlayer: player => dispatch(actions.removePlayer(player))
  };
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
