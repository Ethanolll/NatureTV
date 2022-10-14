import React from "react";
import "../style/Free.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function Free({ dummy1 }) {
  return (
    <div className="free_main">
      <h2 className="free_main_text">지금 무료로 만나보세요!</h2>
      <div className="free_main_movie">
        <div className="free_main_movie_box">
          {dummy1.results.map((item) => {
            return (
              <div className="free_main_movie_box_box">
                <img className="free_main_movie_box_box_img" src={IMG_BASE_URL + item.backdrop_path}></img>
                <h1 className="free_main_movie_box_box_text">{item.title}</h1>
                <p className="free_main_movie_box_box_ex">{item.overview}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
