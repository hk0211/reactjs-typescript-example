import { createStore } from 'redux';
import { State, reducer, initialState } from './reducer'

const store = createStore(reducer, initialState)

export default store
