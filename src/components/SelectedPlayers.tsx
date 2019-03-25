import * as React from "react";
import ReactDOM from "react-dom";
import { IPlayer, ITeam } from "../types/interfaces";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";

type Props = {
  players: IPlayer[];
  teamWhite: ITeam;
  teamBlue: ITeam;
  onRemovePlayer: (player: IPlayer) => void;
  onWhiteScore: (score: number) => void;
  onBlueScore: (score: number) => void;
};

export function SelectedPlayers({
  teamWhite,
  teamBlue,
  players,
  onRemovePlayer,
  onWhiteScore,
  onBlueScore
}: Props) {
  const isWinnerSelected = teamBlue.score === 10 || teamWhite.score === 10;
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
        {!isWinnerSelected && (
          <button onClick={() => onWhiteScore(10)}>Winner!</button>
        )}

        {teamBlue.score === 10 && (
          <div>
            <label>{teamWhite.score}</label>
            <div className="slider">
              <Slider
                min={1}
                max={9}
                marks={{
                  1: "1",
                  2: "2",
                  3: "3",
                  4: "4",
                  5: "5",
                  6: "6",
                  7: "7",
                  8: "8",
                  9: "9"
                }}
                onChange={onWhiteScore}
              />
            </div>
          </div>
        )}
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
        {!isWinnerSelected && (
          <button onClick={() => onBlueScore(10)}>Winner!</button>
        )}
        {teamWhite.score === 10 && (
          <div>
            <label>{teamBlue.score}</label>
            <div className="slider">
              <Slider
                min={1}
                max={9}
                marks={{
                  1: "1",
                  2: "2",
                  3: "3",
                  4: "4",
                  5: "5",
                  6: "6",
                  7: "7",
                  8: "8",
                  9: "9"
                }}
                onChange={onBlueScore}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
