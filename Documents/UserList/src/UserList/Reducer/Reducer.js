import { DISPLAY_USER } from './ActionType'
const initialState = {
    firstName: '',
    lastName: '',
    place: '',
    state: '',
    DOB: ''
}
export const reducer = (state = initialState, Action) => {
    switch (Action.type) {
        case DISPLAY_USER: return {
            ...state,
            firstName:Action.payload.firstName,
            lastName: Action.payload.lastName,
            place: Action.payload.place,
            state: Action.payload.state,
            dob: Action.payload.dob,
            mobileNumber:Action.payload.mobileNumber
        }
    }
    return state
}