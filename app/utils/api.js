var axios = require('axios');
//-----------------------------------------------------------------------//
export function apiLogin(state) {
    return axios.post('http://localhost:8000/login',state)
}
//-----------------------------------------------------------------------//
export function apiTours() {
    return axios.get('http://localhost:8000/tournament/1?details=true')
}

export function apiaddTour(tour1) {
    var tour = ({
        tour : tour1
    })
    return axios.post('http://localhost:8000/tournament/1',tour)
}
//-----------------------------------------------------------------------//
export function apiPlayers() {
    return axios.get('http://localhost:8000/player/1')
}

export function apiaddPlayer(player1,t_id1) {
    var playerName = ({
        playerName : player1,
        t_id : t_id1
    })
    return axios.post('http://localhost:8000/player/1',playerName)
}
//-----------------------------------------------------------------------//
export function apicurrStand() {
    return axios.get('http://localhost:8000/currentStandings/1')
}

export function apiRoundData() {
    return axios.get('http://localhost:8000/getRoundDetails/1')
}

export function apigetPairs() {
    return axios.get('http://localhost:8000/swiss_pairings/1?round=1')
}
