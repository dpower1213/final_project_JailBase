import {create} from "apisauce";

const apiClient = (token, cancelToken) => create(
    {
        baseURL: "jailbase-jailbase.p.rapidapi.com",
        headers:{
            Authorization: "Bearer "+  token
        },
        cancelToken
    }
    )
export default apiClient