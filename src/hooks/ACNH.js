import {useEffect, useState } from "react";
export const ACNHcall = (url,dependencies) =>{
    const [isLoading,setLoading] = useState(true);
    const [ACNHData,setACHHData] = useState(null);
    useEffect( ()=>{
        setLoading(true);
       fetch(url)
       .then((response)=>{
            return response.json();
       })
        .then((data)=>{
            setACHHData(data);
            setLoading(false);
        })
    },[dependencies]);

    return [isLoading,ACNHData];
}

