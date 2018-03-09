import { combineReducers } from 'redux';

import helloReducer from './hello_reducer';

const rootReducer = combineReducers({
    hello: helloReducer
});

export default rootReducer;