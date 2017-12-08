import { Meteor, } from 'meteor/meteor';
import { Players, } from '../imports/api/players';
// this function runs when the server process is finished runnin (meteor app is ready on the server)
Meteor.startup(() => {
  console.log('current players: ', Players.find().fetch());
});
