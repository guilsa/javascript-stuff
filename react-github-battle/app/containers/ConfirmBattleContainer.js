import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from '../utils/githubHelpers'

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
     router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function(){
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
});

export default ConfirmBattleContainer
