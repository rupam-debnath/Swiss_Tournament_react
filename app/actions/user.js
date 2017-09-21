var axios = require('axios');
import store from "../store";
import { React, Redirect } from "react-router";
import { apiLogin,apiTours,apiaddTour,
  apiPlayers,apiaddPlayer,apicurrStand,
  apiRoundData, apigetPairs } from '../utils/api'
const AUTH_USER='AUTH_USER'

//-------------------------------------------------------------------------------//

export function authUser(username, authStatus) {
   return {
    type: AUTH_USER,
    user:username,
    auth: authStatus
   }
}

export function authLogin(state, history) {
   return(dispatch) => {
    dispatch(authUser(null,false))

    apiLogin(state)
    .then((response) => {
        dispatch(authUser("Rupam",true))
        history.push('/dashboard');
    });
   }
}

//-------------------------------------------------------------------------------//

export function tourData(data){
    return {
        type : "FETCHING",
        matchName : data
    }
}

export function getTournament(cb) {
   return(dispatch) => {
    dispatch(tourData(null))
    apiTours(cb)
    .then((response) => {
        dispatch(tourData(response.data))
        cb();
    });
   }
}

export function addTournament(tour,cb) {
   return(dispatch) => {
    dispatch(tourData(null))
    apiaddTour(tour)
    .then((response) => {
        dispatch(tourData(response.data))
        cb();
    });
   }
}

//-------------------------------------------------------------------------------//

export function playerData(data){
    return {
        type : "P_FETCHING",
        playerName : data
    }
}


export function getPlayers(cb) {
   return(dispatch) => {
    dispatch(playerData(null))
    apiPlayers(cb)
    .then((response) => {
        dispatch(playerData(response.data))
        cb();
    });
   }
}

export function addPlayer(player,t_id,cb) {
    console.log("action player: ",player)
   return(dispatch) => {
    dispatch(playerData(null))
    apiaddPlayer(player,t_id)
    .then((response) => {
        dispatch(playerData(response.data))
        cb();
    });
   }
}

//-------------------------------------------------------------------------------//

export function currentStandingData(data){
    return {
        type : "curr_FETCHING",
        currData : data
    }
}


export function currentStanding(cb) {
   return(dispatch) => {
    dispatch(currentStandingData(null))
    apicurrStand(cb)
    .then((response) => {
        dispatch(currentStandingData(response.data))
        cb();
    });
   }
}

//-------------------------------------------------------------------------------//


function getRoundDataAction(round) {
  return{
    type:"LOAD_ROUND_DATA",
    roundData: round
  }
}

export function getRoundData(cb) {
  return(dispatch)=> {
    dispatch(getRoundDataAction(null))
    apiRoundData(cb)
    .then((response)=> {
      dispatch(getRoundDataAction(response.data))
      cb();
    })
  }

}

//-------------------------------------------------------------------------------//

function getPairsData(pairs) {
  return{
    type:"swiss_pair",
    pairs: pairs
  }
}

export function getPairs(cb) {
  return(dispatch)=> {
    dispatch(getPairsData(null))
    apigetPairs(cb)
    .then((response)=> {
      dispatch(getPairsData(response.data))
      cb();
    })
  }

}

//-------------------------------------------------------------------------------//
