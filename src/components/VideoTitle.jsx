import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="z-20 w-screen aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white  text-black text-xl p-4 px-12  rounded-lg hover:opacity-80">
          ▶Play
        </button>
        <button className="bg-gray-500 text-white text-xl p-4 px-12 mx-2 rounded-lg opacity-50 hover:opacity-25">
          ℹMore Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
