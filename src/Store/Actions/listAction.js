import axios from "axios"
import { axiosInstance } from "../../Network/axiosInstance"



export const getList = (data) => (dispatch)=> {

    return axiosInstance.get("/data")
        .then((res) => dispatch(
            {
                type: "GET_LIST",
                payload:res.data
            }
        ))
        .catch((err) => console.log(err))

}