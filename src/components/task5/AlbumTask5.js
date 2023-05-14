import React from "react";
import likePNG from "../../img/like.png"
import dislikePNG from "../../img/dislike.png"
import { useToggle } from "../hooks/useToggle";
import { useFetch } from "../hooks/useFetch"
import Loader from "../task2/Loader";
import Error from "../task2/Error";
import {ALBUMS_URL} from "../task2/AlbumsList"

const AlbumTask5 = () => {
    const {data: albums, loading, error} = useFetch(ALBUMS_URL);
    const {toggler: toggledBtn, changeToggle} = useToggle()

    const changeLike = (e) => {
        if (toggledBtn === true) {   
            document.getElementById(e).src  = likePNG; 
        } else if (toggledBtn === false) {
            document.getElementById(e).src = dislikePNG; 
        }
    }

    return (
        <div className="albums-container">
            {loading && <Loader componentTitle={'AlbumTask5'}></Loader>}
            {(error && !loading) && <Error text={error}></Error>}
            {(!error && !loading) && 
                albums.map((album) => 
                    <div key={album.id} className='album'>
                        <img src={album.thumbnailUrl} alt="img"/>
                        <div>
                            <p>{album.title}</p>
                        </div>
                        <button onClick={() => {
                            const e = album.id;
                            changeToggle();
                            changeLike(e);
                        }}>
                        <img id={album.id} src={dislikePNG} alt="img1"/>
                        </button>
                    </div>
                )}
        </div>
    )
}

export default AlbumTask5