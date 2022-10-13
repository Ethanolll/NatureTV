import React from "react";
import "../style/Free.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function Free({ dummy }) {
  return (
    <div className="free_main">
      <h2 className="free_main_text">지금 무료로 만나보세요!</h2>
      <div className="free_main_movie">
        <div className="free_main_movie_box">
          {dummy.results.map((item) => {
            return (
              <div>
                <img src={IMG_BASE_URL + item.backdrop_path}></img>
                <h1>{item.title}</h1>
                <p>{item.overview}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
