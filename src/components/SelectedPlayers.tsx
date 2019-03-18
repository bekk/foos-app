import * as React from "react";
import { IPlayer, ITeam } from "../types/interfaces";

type Props = {
  players: IPlayer[];
  teamWhite: ITeam;
  teamBlue: ITeam;
  onRemovePlayer: (player: IPlayer) => void;
};

export function SelectedPlayers({
  teamWhite,
  teamBlue,
  players,
  onRemovePlayer
}: Props) {
  return (
    <div>
      <h3>White Team</h3>
      <div className="buttonAlign">
        <button
          className="whitePlayerButton"
          onClick={() => onRemovePlayer(teamWhite.players[0])}
        >
          {teamWhite.players[0]}
        </button>
        <button
          className="whitePlayerButton"
          onClick={() => onRemovePlayer(teamWhite.players[1])}
        >
          {teamWhite.players[1]}
        </button>
        <button>Winner!</button>
      </div>
      <h3>Blue Team</h3>
      <div className="buttonAlign">
        <button
          className="bluePlayerButton"
          onClick={() => onRemovePlayer(teamBlue.players[0])}
        >
          {teamBlue.players[0]}
        </button>
        <button
          className="bluePlayerButton"
          onClick={() => onRemovePlayer(teamBlue.players[1])}
        >
          {teamBlue.players[1]}
        </button>
      </div>
    </div>
  );
}
