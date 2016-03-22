var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass ({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function () {
    console.log(this.props);
  },
  render: function () {
    return (
      <Results isLoading={this.state.isLoading} scores={this.state.scores} />
    )
  }
});

module.exports = ResultsContainer;
