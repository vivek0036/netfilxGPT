import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="absolute inset-0 z-20 px-16 pt-[15%] text-white bg-gradient-to-r from-black via-black/20 to-transparent">
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
