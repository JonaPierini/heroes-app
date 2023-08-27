import { types } from "../auth/types/types";
 

export const AuthReducer = (state = {}, action) => {
    //siempre returan un estado
    switch (action.type) {
        case types.login: // 'login'
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout: //logout
            return {
                logged: false,
                name: null
            };
    
        default:
            return state;
    }
}