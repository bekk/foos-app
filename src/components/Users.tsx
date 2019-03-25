import * as React from "react";
import * as actions from "../actions/index";
import {
  StoreState,
  ITeam,
  IPlayer,
  IMatchContract,
  IPlayerId
} from "../types/interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { Player } from "./Player";
import { SelectedPlayers } from "./SelectedPlayers";
import { addMatch, getPlayers, addNewPlayer } from "../clients/foosService";
import { foosReducer } from "../reducers/foosReducer";
import { on } from "cluster";

interface IPropsFromState {
  players: IPlayer[];
  newUser: IPlayerId;
}

interface IPropsWithDispatch {
  onWriteUserName: (userName: string) => void;
  onWriteUserId: (id: number) => void;
}

type Props = IPropsFromState & IPropsWithDispatch;

function createUser(name: string, id: number): IPlayerId {
  return {
    name: name,
    employeeId: id
  };
}

class UserComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  onCreateUser = async () => {
    const writeModel = this.props.newUser.employeeId
      ? createUser(this.props.newUser.name, this.props.newUser.employeeId)
      : createUser(this.props.newUser.name, 0);

    const viewModel = await addNewPlayer(writeModel);
    console.log(viewModel);
  };

  render() {
    const { onWriteUserName, onWriteUserId } = this.props;
    return (
      <div>
        <h2>Opprett ny bruker</h2>

        <input
          type="text"
          onChange={event => onWriteUserName(event.target.value)}
          placeholder="Velg brukernavn"
        />
        <input
          type="number"
          onChange={event => onWriteUserId(parseInt(event.target.value))}
          placeholder="Skriv ditt ansattnummer"
        />

        <button onClick={this.onCreateUser}>Lagre</button>
      </div>
    );
  }
}

export function mapStateToProps({ foos }: StoreState): IPropsFromState {
  return {
    players: foos.players,
    newUser: foos.newUser
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.FoosAction>
): IPropsWithDispatch {
  return {
    onWriteUserName: userName => dispatch(actions.WriteUserName(userName)),
    onWriteUserId: id => dispatch(actions.WriteUserId(id))
  };
}

export const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);
