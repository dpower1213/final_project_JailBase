import {useEffect, useState } from 'react';
import { GetMug9 } from '../api/apiMug';
import { GetMugSearch } from '../api/apiMug';
import { CancelToken } from 'apisauce';


export const useGetMugSearch = (county,full_name)=>{
    
    const [mugsearch, setMugSearch]=useState();
    const source = CancelToken.source();
        
    useEffect(()=>{
        (async()=>{
            const {mugsearch} = await GetMugSearch(county, full_name,source.token);
            setMugSearch(mugsearch);
            // setSearchParam({});
        
        })()
        return ()=>{source.cancel()}
    },[county, full_name],
    
    )
    // console.log(mug);
    return mugsearch;
};

export const useGetMug2 = ()=>{
    
    const [mug, setMug]=useState();
    const source = CancelToken.source();
        
    useEffect(()=>{
        (async()=>{
            const {mug} = await GetMug9(source.token);
            setMug(mug);
        
        })()
        return ()=>{source.cancel()}
    },[],
    
    )
    console.log(mug);
    return mug;
};