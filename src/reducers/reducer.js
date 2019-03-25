import objectAssign from 'object-assign';
import { CHANGENAME } from '../actions/action';

const initState = {
    name: 'jordan'
}

export default function checkName(state = initState, action) {
    switch (action.type) {
        case CHANGENAME:
            return objectAssign({}, state, action.datas);
        default:
            return state;
    }
}