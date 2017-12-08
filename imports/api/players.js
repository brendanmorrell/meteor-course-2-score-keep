import { Mongo, } from 'meteor/mongo';
import numeral from 'numeral';

// the creates the database (constructor function). Also, with this meteor automatically creates the actual mongo database for the server and the mini mongo on the client, so you can use both
export const Players = new Mongo.Collection('players');

export const calculatePlayersPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o'),
    };
  });
};
