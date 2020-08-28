import React, { useState } from "react";
import Demo from "../demo";
import "./searchBox.scss";

const SearchBox = () => {
  const defautKeywords = ["Mac Pro", "Mac Mini", "Mac Air"]
  // 展示数组
  const [keywords, setKeywords] = useState(defautKeywords);
  // 当input聚焦控制现实placeholder和隐藏::before和::after
  const [isFoucusing, setFoucusing] = useState(false);
  // 当前轮播的位置
  const [currentIndex, setCurrentIndex] = useState(0);
  // 当前轮播的位置
  const [before, setBefore] = useState(keywords[0]);
  // 当前轮播的位置
  const [after, setAfter] = useState(keywords[1]);
  return (
    <Demo>  
      <div className="search-box animate" data-before={ isFoucusing ? '': keywords[currentIndex] } data-after={isFoucusing ? '': keywords[currentIndex+1] === undefined ? keywords[0] : keywords[currentIndex+1] }>
        <input type="text" placeholder={ !isFoucusing ? '': keywords[currentIndex]} onFocus={() => { setFoucusing(true) }} onBlur={() => { setFoucusing(false) }}></input>
      </div>
    </Demo>
  );
};

export default SearchBox;
