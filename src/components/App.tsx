import * as React from "react";
import * as actions from "../actions/index";
import {
  StoreState,
  ITeam,
  IPlayer,
  IMatchContract
} from "../types/interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { Player } from "./Player";
import { SelectedPlayers } from "./SelectedPlayers";
import { addMatch, getPlayers } from "../clients/foosService";
import { foosReducer } from "../reducers/foosReducer";

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
  onGetAllPlayers: (players: IPlayer[]) => void;
}

type Props = IPropsFromState & IPropsWithDispatch;

function createMatch(teamWhite: ITeam, teamBlue: ITeam): IMatchContract {
  return {
    WhiteTeam: { Players: teamWhite.players, Score: teamWhite.score },
    BlueTeam: { Players: teamBlue.players, Score: teamBlue.score }
  };
}

class AppComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers = async () => {
    const allPlayers = await getPlayers();
    const allPlayerNames = allPlayers.map(x => x.name);
    this.props.onGetAllPlayers(allPlayerNames);
  };

  save = async () => {
    const writeModel = createMatch(this.props.teamWhite, this.props.teamBlue);
    const viewModel = await addMatch(writeModel);
    
  };

  render() {
    const {
      teamWhite,
      teamBlue,
      players,
      onAddPlayer,
      onRemovePlayer,
      onBlueScore,
      onWhiteScore
    } = this.props;
    return (
      <div>
        <h1>Spillere</h1>
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
          onBlueScore={onBlueScore}
          onWhiteScore={onWhiteScore}
        />
        <div>
          <button className="lagreButton" onClick={this.save}>
            Lagre Match!
          </button>
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
    onAddPlayer: player => dispatch(actions.addPlayer(player)),
    onRemovePlayer: player => dispatch(actions.removePlayer(player)),
    onGetAllPlayers: players => dispatch(actions.getAllPlayers(players))
  };
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
