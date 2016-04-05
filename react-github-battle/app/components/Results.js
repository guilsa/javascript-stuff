import React, { PropTypes } from 'react'
import { space } from '../styles'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

function StartOver (){
  return (
    <div className="col-sm-12" styles={space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Results ({isLoading, scores, playersInfo}) {
  if (isLoading === true) {
    return (<Loading speed={100} text="One Moment" />)
  }

  if (scores[0] === scores[1]){
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Looser">
          <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
