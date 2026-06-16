import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);

  return (
    <div className="overflow-x-hidden">
      <iframe
        className="w-screen h-screen scale-125 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${trailerVideo}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
