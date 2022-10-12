import React from "react";
import "../style/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_logo">natureTV</div>
        <div className="header_opentv">
          <span>TV 열기</span>
          <span>↗</span>
        </div>
        <div className="header_empty"></div>
        <div className="header_search">
          <input placeholder="검색" />
        </div>
        <div className="header_login">
          <button>로그인</button>
        </div>
      </div>
    </div>
  );
}
