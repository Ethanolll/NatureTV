import React from "react";
import "/Users/nature/Desktop/natureTv/nature-tv/src/style/big_picture.css";
import main from "/Users/nature/Desktop/natureTv/nature-tv/src/img/main.jpg";

export default function Header() {
  return (
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
          <div className="main_movie_photo"></div>
        </div>
      </div>
    </div>
  );
}
