import clientTokenAuth from './clientTokenAuth'

const endpoint = 'api/post';

export const editUser = async (email, password, name_first, name_last, cancelToken) =>{
    let error;
    let message;
    let user;
    
    const response = await clientTokenAuth(email, password, name_first, name_last, cancelToken).put(endpoint);
    console.log(response)
    if (response.ok){
    
        message = 'bueno!'
        user=response.data
        console.log(response)
    }else {
        error = 'Error has Occured. Please Try Again'
    }
    
    return{
        error,
        user,
        message
    };
};
