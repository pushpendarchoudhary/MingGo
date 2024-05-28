import axios from "axios";
import { ALL_TRACK_FAIL, ALL_TRACK_REQUEST, ALL_TRACK_SUCCESS, CLEAR_ERRORS } from "../constants/trackConstant";


export const getTrack = ()=> async (dispatch)=> {
    try {
        dispatch({
            type: ALL_TRACK_REQUEST
        });
        const {data} = await axios.get("/api/v1/tracks");

        dispatch({
            type: ALL_TRACK_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: ALL_TRACK_FAIL,
            payload: error.response.data.message,
        })
    }
}

// clearing errors

export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}

