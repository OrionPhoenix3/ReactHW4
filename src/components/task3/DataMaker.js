import React, {useEffect, useState} from "react";

export const DataMaker= ({url, renderDataUrl}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            await fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Error(')
                }
            })
            .then(result => setPosts(result))
            .catch(err => console.log(err.message))
        } 
            fetchPosts();
        }, [url]);

    return (
        <div>
            {renderDataUrl(posts)}
        </div>
    )
}

