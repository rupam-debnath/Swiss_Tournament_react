import {createStore , combineReducers , applyMiddleware ,compose} from 'redux'
import {user , matchData, playerData, currData1,round, swissPairs} from './reducers/user'
import actionCreator from './actions/user'
import thunk from 'redux-thunk'

const combiners = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(combineReducers({
    user,
    matchData,
    playerData,
    currData1,
    round,
    swissPairs
}),combiners
)
export default store
