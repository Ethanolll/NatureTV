import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function Free({ dummy }) {
  return (
    <div className="free_main">
      <h2 className="free_main_text">정화's PICK 🍌</h2>
      <div className="free_main_movie">
        <div className="free_main_movie_box">
          {dummy.results.map((item) => {
            return (
              <div>
                <img src={IMG_BASE_URL + item.backdrop_path}></img>
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
