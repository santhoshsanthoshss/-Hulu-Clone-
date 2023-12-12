import React from "react";
import headerstyle from "../../css/Header.module.css";
import {
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
  FlashOn,
} from "@mui/icons-material";
const Header = () => {
  return (
    <div className={headerstyle.header}>
      <div className={headerstyle.header_icons}>
        <div
          className={(headerstyle.header_icon, headerstyle.header_icon_active)}
        >
          <Home className={headerstyle.user1} />
          <p>Home</p>
        </div>
        <div className={headerstyle.header_icon}>
          <FlashOn className={headerstyle.user1} />
          <p>Trending</p>
        </div>
        <div className={headerstyle.header_icon}>
          <LiveTv className={headerstyle.user1} />
          <p>Verified</p>
        </div>
        <div className={headerstyle.header_icon}>
          <VideoLibrary className={headerstyle.user1} />
          <p>Collections</p>
        </div>
        <div className={headerstyle.header_icon}>
          <Search className={headerstyle.user1} />
          <p>Seacrh</p>
        </div>
        <div className={headerstyle.header_icon}>
          <PersonOutline className={headerstyle.user1} />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
};

export default Header;
