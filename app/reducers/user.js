import React from 'react'
import action from '../actions/user'

const initialState = {
  name: '',
  auth: false
}

const tourInitialState = {
  matchData: ""
}

const pInitialState = {
  playerName : []
}

const currInitialState = {
  currData : []
}

const roundInitialState = {
  roundData : []
}

const pairInitialState = {
  pairs : ""
}

export function user (state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER' :
      return Object.assign({}, state, {
        name: action.user,
        auth: action.auth
      })
    default :
      return state
  }
}


export function matchData (state = tourInitialState, action) {
  switch (action.type) {
    case 'FETCHING' :
      return Object.assign({}, state, {
        matchData: action.matchName
      })
    default :
      return state
  }
}

export function playerData (state = pInitialState, action) {
  switch (action.type) {
    case 'P_FETCHING' :
      return Object.assign({}, state, {
        playerName: action.playerName
      })
    default :
      return state
  }
}

export function currData1 (state = currInitialState, action) {
  switch (action.type) {
    case 'curr_FETCHING' :
      return Object.assign({}, state, {
        currData: action.currData
      })
    default :
      return state
  }
}

export function round (state = roundInitialState, action) {
  switch (action.type) {
    case 'LOAD_ROUND_DATA' :
      return Object.assign({}, state, {
        roundData: action.roundData
      })
    default :
      return state
  }
}

export function swissPairs (state = pairInitialState, action) {
  switch (action.type) {
    case 'swiss_pair' :
      return Object.assign({}, state, {
        pairs: action.pairs
      })
    default :
      return state
  }
}
