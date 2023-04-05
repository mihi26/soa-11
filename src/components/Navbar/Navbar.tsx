import React from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import "./Navbar.scss";

function Navbar() {
  const leftItem = [
    {
      id: 0,
      label: "Hot Drops",
      hasIcon: false,
    },
    {
      id: 1,
      label: "Men",
      hasIcon: true,
    },
    {
      id: 2,
      label: "Women",
      hasIcon: true,
    },
  ];
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        {leftItem.map((item) => {
          return (
            <div className="left-item-wrapper" key={item.id}>
              <div className="item-label">{item.label}</div>
              {item.hasIcon ? <FaCaretDown /> : null}
            </div>
          );
        })}
      </div>
      <div className="navbar-right">
        <div className="right-item-wrapper">
          <FaSearch />
        </div>
        <div className="right-item-wrapper">
          <RiUser3Fill />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
