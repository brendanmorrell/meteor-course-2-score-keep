import React from 'react';
import ReactDom from 'react-dom';
import { Meteor, } from 'meteor/meteor';
import { Tracker, } from 'meteor/tracker';// tracks changes in the mongodb databse/minimongo

import { Players, calculatePlayersPositions, } from '../imports/api/players';
import App from '../imports/ui/App';


// this runs when the dom is ready
Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, {sort: {score: -1, }, }).fetch();
    const positionedPlayers = calculatePlayersPositions(players);
    ReactDom.render(<App players={positionedPlayers} />, document.getElementById('app'));
  });
});
