import { server } from "../store";
import axios from "axios";

export const loadUser = () => async (dispatch) =>{
    try{
        //set loading = true
        dispatch({
            type: "loadUserRequest"
        })

        //fetch data
        const {data} = axios.get(`${server}/me`, {
            withCredentials: true,
        })

        //set fetched data and loading = false
        dispatch({
            type:"loadUserSuccess",
            payload: data.user
        })

    }catch(error){
        //if error, set error and loading = false
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message
        })
    }
}