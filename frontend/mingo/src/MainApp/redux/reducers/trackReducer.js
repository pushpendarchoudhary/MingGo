import {ALL_TRACK_FAIL, ALL_TRACK_REQUEST, ALL_TRACK_SUCCESS, CLEAR_ERRORS} from "../constants/trackConstant";



export const trackReducer = (state={tracks: []}, action)=>{

    switch(action.type){
        case ALL_TRACK_REQUEST:
            return{
                loading: true,
                track:[]
            }
        case ALL_TRACK_SUCCESS:
            return {
                loading:false,
                track: action.payload.tracks,
                tracksCount: action.payload.tracksCount
            }
        case ALL_TRACK_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
            return state;
    }

}