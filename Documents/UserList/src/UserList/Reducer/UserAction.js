import { DISPLAY_USER } from './ActionType'

export const displayData = (data) => {
    return {
        type: DISPLAY_USER,
        payload:data
    }
}