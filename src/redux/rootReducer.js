import { combineReducers } from 'redux';
import counterReducer from './Paginacion/counter.reducer';
import resultReducer from './Result/result.reducer';

const rootReducer = combineReducers({

    counter: counterReducer,
    result: resultReducer,

});

export default rootReducer;