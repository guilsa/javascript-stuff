import React from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

const ResultsContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount () {
    // console.log(this.props.location.state.playersInfo);
    battle(this.props.location.state.playersInfo)
      .then(function (scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render () {
    return (
      <Results isLoading={this.state.isLoading} playersInfo={this.props.location.state.playersInfo} scores={this.state.scores} />
    );
  }
});

export default ResultsContainer
