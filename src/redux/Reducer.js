const initialState = {
    show:true
}
export default function(state=initialState, action) {
    switch(action.type) {
        case "A": {
            return {
                ...state,
                show:action.show
            }
        }
        default:
            return state;
    }
}