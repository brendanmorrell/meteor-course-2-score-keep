import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayersList extends React.Component {
  renderPlayers() {
    if(this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Click &apos;Add Player&apos; to get started!</p>
        </div>
      );
    }
    return this.props.players.map((player) => {
      return <Player key={player._id} player={player} />;
    });
  }
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
};
