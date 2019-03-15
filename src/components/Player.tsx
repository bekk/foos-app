import * as React from "react";
import { StoreState, ITeam, IPlayer } from "../types/interfaces";

type Props = {
  player: IPlayer;
  onAddPlayer: (player: IPlayer) => void;
};

export function Player({ player, onAddPlayer }: Props) {
  return (
    <div key={"playerId" + player}>
      <button className="playerButtons" onClick={() => onAddPlayer(player)}>
        {player}
      </button>
    </div>
  );
}
