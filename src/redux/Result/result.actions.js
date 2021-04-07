import { TERM, IMAGEN } from './result.types';

export const termStore = (value) => {

    return {

        type: TERM,
        payload: value

    };

};

export const imagenStore = (value) => {

    return {

        type: IMAGEN,
        payload: value
    };

};