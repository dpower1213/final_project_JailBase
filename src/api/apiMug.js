import apiClientNoAuth from './clientNoAuth'


export const GetMugSearch = async (county, full_name, cancelToken) =>{
    const endpoint = `/recent/?source_id=${county}&appid=8ccd47fff7msh86d5a3c7ccf80ddp1a6927jsn276d4ce537d9`
    let mugsearch;
    let error;
    let message;
    
    // function handleSubmit(event){
    //     event.stopPropagation();
    //     event.preventDefault();
    //     let county = document.getElementsByName('county')[0].value
    //     GetMug9(county)
    //     }
    
    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    mugsearch=response.data
    // console.log(mug.records)
    
    return {
                mugsearch:mugsearch.records,
            };
        };

export const GetMug9 = async (cancelToken) =>{
    let mug;
    let error;
    let message;
    
    // function handleSubmit(event){
    //     event.stopPropagation();
    //     event.preventDefault();
    //     let county = document.getElementsByName('county')[0].value
    //     GetMug9(county)
    //     }
        
    const endpoint = '/recent/?source_id=ia-pcso&appid=8ccd47fff7msh86d5a3c7ccf80ddp1a6927jsn276d4ce537d9'
    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    mug=response.data
    // console.log(mug.records)    
    
    return {
                mug:mug.records,
            };
        };