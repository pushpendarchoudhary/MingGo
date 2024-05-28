import React, { useEffect } from "react";
import { getTrack } from "../../redux/actions/trackActions";
import { useSelector, useDispatch } from "react-redux";
import Trackdetail from "./track";
import SongList from "./list";
import "./list.css";
const AllTracks = ()=>{

    const dispatch = useDispatch();
    const {loading, error, track, trackCount} = useSelector(state=>state.tracks);
    console.log(track);

    useEffect(()=>{
        dispatch(getTrack());
    }, [dispatch]);
    return (
        <div div className="songsNames">
            {Array.isArray(track) && track.map(track =>(
                <>
                {/* <Trackdetail key={track._id} track={track} /> */}
                <SongList key={track._id} track={track} />
                </>
            ))}
        </div>
    )
}

export default AllTracks;