import {create} from "apisauce";

const apiClient = (cancelToken) => create(
    {
        baseURL: "https://jailbase-jailbase.p.rapidapi.com",
        cancelToken,
        headers: {'X-RapidAPI-Key':'8ccd47fff7msh86d5a3c7ccf80ddp1a6927jsn276d4ce537d9',
        'X-RapidAPI-Host': 'jailbase-jailbase.p.rapidapi.com'}
        
    }
)
export default apiClient