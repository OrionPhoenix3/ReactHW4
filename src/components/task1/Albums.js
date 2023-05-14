import React, {useState, useEffect} from "react";
import likePNG from "../../img/like.png"
import dislikePNG from "../../img/dislike.png"
import { withToggler } from "../HOC/withToggler";

const Album = ({toggledBtn, changeToggled}) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then(res => res.json())
            .then(result => setAlbums(result));
    },[]);

    const changeLike = (e) => {
        if (toggledBtn === true) {   
            document.getElementById(e).src  = likePNG; 
        } else if (toggledBtn === false) {
            document.getElementById(e).src = dislikePNG; 
        }
    }

    return (
    <div className="albums">
        {albums.map((album) => 
            <div key={'album' + album.id} className='album'>
                <img className="albums-img__task1" src={album.thumbnailUrl} alt="img"/>
            <div>
                <p>{album.title}</p>
        </div>
        <button className="like-btn" onClick={() => {
                const e = 'album' + album.id;
                changeToggled(e);
                changeLike(e);
            }}>
            <img id={'album' + album.id} src={dislikePNG} alt="img1"/>
        </button>
        </div>
        )}
    </div>
    )
}

const WrappedAlbum = withToggler(Album)

export default WrappedAlbum
