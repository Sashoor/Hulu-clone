import React from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate";
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';


const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
           <img src={
          `${base_url}${movie.backdrop_path || movie.poster_path}` ||
          `${base_url}${movie.poster_path}`
        } alt=""/> 
       
       <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
      />
       <h2>{movie.title || movie.original_name}</h2>
       <p className="videoCard__stats">
       {movie.media_type && `${movie.media_type} •`}
       {movie.release_date || movie.first_air_date} •
        <ThumbUpAltSharpIcon />{" "}
        {movie.vote_count}
         </p>
        </div>
    )
}

export default VideoCard
