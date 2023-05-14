import React from "react";
import AlbumTask2 from "./AlbumTask2"
import {withFetchingData} from "../HOC/withFetchingData"
import Error from "./Error";
import Loader from "./Loader";

export const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

const AlbumsList = ({data, isLoading, error}) => {
    return (
        error ? <Error text={error}/> : 
            isLoading ? <Loader componentTitle={'AlbumsList'}/> :
                data.map((album) => 
                    <AlbumTask2 key={album.id} title={album.title}/>
                )
    )
}

const WrappedAlbumsList = withFetchingData(AlbumsList, ALBUMS_URL)

export default WrappedAlbumsList