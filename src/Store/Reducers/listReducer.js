const INITIAL_VALUE = {
    list: []
}

export default function listReducer(state = INITIAL_VALUE, action) {
    switch(action.type){
        case "GET_LIST":
            return{
                ...state,
                list:action.payload
            }
        default:
            return state
    }


}