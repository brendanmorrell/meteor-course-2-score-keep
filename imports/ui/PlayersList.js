import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';// more great 3rd party react components can be found here (http://www.material-ui.com/#/) in which a lot of the good ones are here (http://www.material-ui.com/#/components/app-bar)

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
      return (
        <Player key={player._id} player={player} />
      );
    });
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
};
