import { IMatchContract, IPlayerId } from "../types/interfaces";

export async function addMatch(match: IMatchContract) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "applicaiton/json"
    },
    body: JSON.stringify(match),
    method: "POST"
  };
  const url = `http://localhost:5000/api/Result`;
  const response = await fetch(url, options);
  return response.json() as Promise<Array<IMatchContract>>;
}

export async function getPlayers() {
  const options = {
    headers: {
      "Content-Type": "applicaiton/json"
    },
    method: "get"
  };
  const url = `http://localhost:5000/api/Players`;
  const response = await fetch(url, options);
  return response.json() as Promise<Array<IPlayerId>>;
}
