import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        const fetchUrl = () => {
            fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }  else {
                    throw new Error('Error(')
                }
            })
            .then(json => setData(json))
            .catch(err => setError(err.message)) 
            .finally(() => setLoading(false))
    }
    setTimeout(() => {
        fetchUrl();
    }, 3000);
    },[url]);
        
    return {data, loading, error}
}