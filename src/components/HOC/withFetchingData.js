import React, {useState, useEffect}  from "react";

export const withFetchingData = (WrappedComponent, url) => () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        await fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json()
            }  else {
                throw new Error('Error(')
            }
        })
        .then(result => setData(result))
        .catch(err => setError(err.message))
        .finally(setLoading(false)) 
        } 

        setTimeout(() => {
            fetchData();
        }, 3000);
    },[]);
        
    return (<WrappedComponent data={data} isLoading={loading} error={error}/>)
}

