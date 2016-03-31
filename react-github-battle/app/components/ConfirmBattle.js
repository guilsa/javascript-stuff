import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { space } from '../styles'
import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'
import MainContainer from './MainContainer'
import Loading from './Loading'

var ConfirmBattle = function(props){
  return props.isLoading === true
  ? <Loading speed={300} text="Waiting"/>
  : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={space}>
            <button className="btn btn-lg btn-success" type="button" onClick={props.onInitiateBattle}>
              Initiate Battle
            </button>
          </div>
          <div className='col-sm-12' style={space}>
            <Link to='/playerOne'>
              <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>

}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle
