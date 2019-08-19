import * as React from "react";
import * as actions from "../actions/index";
import {
  StoreState,
  ITeam,
  IPlayer,
  IMatchContract,
  Iscores
} from "../types/interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { Player } from "./Player";
import { SelectedPlayers } from "./SelectedPlayers";
import { addMatch, getPlayers, getResults } from "../clients/foosService";
import { foosReducer } from "../reducers/foosReducer";
import { groupBy } from "lodash";

interface IPropsFromState {
  teamWhite: ITeam;
  teamBlue: ITeam;
  players: IPlayer[];
}

interface IPropsWithDispatch {
  onWhiteScore: (score: number) => void;
  onBlueScore: (score: number) => void;
  onGetAllPlayers: (players: IPlayer[]) => void;
}

type Props = IPropsFromState & IPropsWithDispatch;

function rankPlayers(scores: Iscores[]) {
  const length = scores.map(x => ({ name: x.name, x }));
}

class RankingComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.loadResults();
  }

  loadResults = async () => {
    const allPlayers = await getResults();
    const userNames = allPlayers.map(x => x.name);
    console.log(userNames);

    const groupByPlayer = groupBy(allPlayers, x => x.name);
    console.log(groupByPlayer);

    const scores = userNames.map(x => ({
      name: x,
      score: groupByPlayer[x].map(y => y.score)
    }));
    const rankedPlayers = rankPlayers(scores);
    console.log(scores);
    const x = (rankedPlayers) => rankedPlayers.filter((v,i) => rankedPlayers.indexOf(v) === i)

    };

  render() {
    return (
      <div>
        <h2>Ranking</h2>
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
    onGetAllPlayers: players => dispatch(actions.getAllPlayers(players))
  };
}

export const Ranking = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingComponent);
