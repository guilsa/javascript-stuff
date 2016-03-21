var React = require('React');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  onUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  OnSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if ( this.props.routeParams.playerOne ) {
      // go to /battle
      this.context.router.push({
        pathname: '/batle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.OnSubmitUser}>
            <div className="form-group">
              <input className="form-control"
                     placeholder="Github Username"
                     onChange={this.onUpdateUser}
                     value={this.state.username}
                     type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = PromptContainer;
