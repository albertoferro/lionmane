import { TERM, IMAGEN } from './result.types';


const INITIAL_STATE = {

    term: '',
    imagen: [],
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {


        case TERM:

            return {

                ...state, term: action.payload,

            };

        case IMAGEN:

            return {

                ...state, imagen: action.payload,

            };

        default: return state;

    }

};

export default reducer;