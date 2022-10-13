import React from "react";
import "../style/big_picture.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function big_picture({ dummy }) {
  return (
    <div>
      <div className="main">
        <div className="main_photo">
          <div className="main_text">
            <h1>
              모든 Original
              <br />
              콘텐츠가 한자리에
            </h1>
            <div>
              수상에 빛나는 다채로운 시리즈와 영화에서
              <br /> 스타 배우들을 만나보세요.
            </div>
            <div className="free">
              <button className="free_button">무료 체험 시작</button>
              <div className="free_text">7일 무료 체험 후 월 ₩6,500</div>
            </div>
          </div>
          <div className="main_movie">
            <div className="main_movie_text">Featured</div>
            <div className="main_movie_photo_box">
              {dummy.results.map((item) => {
                return <img src={IMG_BASE_URL + item.backdrop_path}></img>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
