import React from "react";
import poster from "../../media/mic.jpg";
import './list.css';

const SongList = ({track})=>{
    return (
        <div>
        <div className="listMain">
            <img className="poster" src={poster} alt="poster.jpg" />
            <div>
                <p className="small1">title: {track.title}</p>
                <p className="small1 sub">artist: {track.artist}</p>
                <p className="small1 sub">album: {track.album}</p>
            </div>
            
        </div>
        </div>
    )
}

export default SongList;