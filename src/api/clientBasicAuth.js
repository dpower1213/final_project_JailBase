import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (email, password, cancelToken) => create(
    {
        baseURL: "jailbase-jailbase.p.rapidapi.com",
        headers:{
            Authorization: "Basic "+ base64.encode(email+":"+password)
        },
        cancelToken
    }
    )

export default apiClient