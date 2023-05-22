import { useState,useEffect } from "react";
// We create a useFetch func.
const useFetch = (url) => {           // accept url as the parameter

    const [data,setData] = useState(null);    // replaced blogs with data bec general func.
    const [IsLoading, setIsLoading] = useState(true);
    const [err,setError] = useState(null); 

    useEffect( () => {
        fetch(url)                          
            .then(res =>{
                if(!res.ok){
                    throw Error("Could not fetch data for that resource");
                }
                return res.json() ;
            })  
            .then(data => {            // this data is a local variable not same as above one
                setData(data);      
                setIsLoading(false);
            })
            .catch(err => {                 // catches any kind of error          
                setError(err.message) ;
                setIsLoading(false);
            })
    }, [url] ) ;                // url is a dependency. So, whenever url changes, this func will re-render.

    return {data , IsLoading , err} ;  // we can de-structure and get these values in the fn call.  s=
} 

export default useFetch ;