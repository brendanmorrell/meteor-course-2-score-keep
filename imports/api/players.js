import { Mongo } from 'meteor/mongo';

// the creates the database (constructor function). Also, with this meteor automatically creates the actual mongo database for the server and the mini mongo on the client, so you can use both
export const Players = new Mongo.Collection('players');
