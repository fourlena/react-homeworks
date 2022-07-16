import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: RootType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {

            let newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
            return action.payload == 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }

        default:
            return state
    }
}

type RootType = sortUpTypeAC | sortDownTypeAC | checkAgeTypeAC

export type sortUpTypeAC = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

export type sortDownTypeAC = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

export type checkAgeTypeAC = ReturnType<typeof checkAgeAC>
export const checkAgeAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}