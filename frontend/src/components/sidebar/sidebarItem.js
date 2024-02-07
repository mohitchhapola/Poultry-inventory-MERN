import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "link");
const activeSublink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setExpandMenu] = useState(true);

  if (item.childrens) {
    return (
      <div
        className={`${
          expandMenu ? "open" : ""
        } sidebar-item s-parent  transition-all duration-500`}
      >
        <div className="sidebar-title ">
          <span className="flex items-center justify-between">
            {item.icon && <div className="icon">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
            <MdKeyboardArrowRight
              size={25}
              className={`arrow-icon cursor-pointer ${
                expandMenu ? "transform rotate-90" : ""
              } transition-transform duration-300`}
              onClick={() => setExpandMenu(!expandMenu)}
            />
          </span>
        </div>
        <div className={`sidebar-content  ${expandMenu ? "h-auto" : "h-0"} overflow-hidden transition-all duration-300`}>
          {item.childrens.map((child, index) => {
            return (
              <div key={index} className="s-child">
                <NavLink to={child.path} className={activeSublink}>
                  <div className="sidebar-item">
                    <div className="sidebar-title">
                      <span className="flex items-center">
                        {child.icon && <div className="icon">{child.icon}</div>}
                        {isOpen && <div>{child.title}</div>}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className={activeLink}>
        <div className="sidebar-item s-parent">
          <div className="sidebar-title">
            <span className="flex items-center">
              {item.icon && <div className="icon">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
