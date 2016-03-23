var React = require('react');

var styles = {
  containers: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
};

var Loading = React.createClass({
  getInitialState: function () {
    this.originaltext = "Loading";
    return {
      text: "Loading"
    }
  },
  componentDidMount: function () {
    var stopper = this.originaltext + "...";
    this.interval = setInterval(function(){
      if (this.state.text === stopper) {
        this.setState({
          text: this.originaltext
        })
      } else {
        this.setstate({
          text: this.originaltext + "."
        })
      }
    }.bind(this), 300);
  },
  componentWillMount: function () {
    clearInterval(this.interval);
  },
  render: function(){
    return (
      <div styles={styles.container}></div>
      <p styles={styles.container}>{this.state.text}</p>
    )
  }
})

module.exports = Loading;
