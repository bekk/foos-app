import * as React from "react";
import * as actions from "../actions/index";
import { StoreState, IPlayer, IPlayerId } from "../types/interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";

import { addNewPlayer } from "../clients/foosService";

interface IPropsFromState {
  players: IPlayer[];
  newUser: IPlayerId;
}

interface IPropsWithDispatch {
  onWriteUserName: (userName: string) => void;
  onWriteUserId: (id: string) => void;
  onResetState: () => void;
}

type Props = IPropsFromState & IPropsWithDispatch;

function createUser(name: string, id: string): IPlayerId {
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
    const viewModel = await addNewPlayer(this.props.newUser);
    this.props.onResetState();
  };

  render() {
    const { onWriteUserName, onWriteUserId, newUser } = this.props;
    return (
      <div>
        <h2>Opprett ny bruker</h2>
        <form>
          <input
            type="text"
            value={newUser.name}
            onChange={event => onWriteUserName(event.target.value)}
            placeholder="Velg brukernavn"
            required
          />
          <input
            type="number"
            value={newUser.employeeId}
            onChange={event => onWriteUserId(event.target.value)}
            placeholder="Skriv ditt ansattnummer"
          />
          <button onClick={this.onCreateUser}>Opprett bruker</button>
        </form>
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
    onWriteUserId: id => dispatch(actions.WriteUserId(id)),
    onResetState: () => dispatch(actions.ResetState())
  };
}

export const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);
