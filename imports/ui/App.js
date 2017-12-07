import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import PlayersList from './PlayersList';
import AddPlayer from './AddPlayer';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="Score Keep" subtitle="Created by Brendan Morrell" />
        <div className="wrapper">
          <PlayersList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};
