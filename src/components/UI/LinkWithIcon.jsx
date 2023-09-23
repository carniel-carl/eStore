import React from "react";

import "./../../assets/styles/UI/LinkWithIcon.scss";

import { NavLink } from "react-router-dom";

const LinkWithIcon = ({ title, icon, to, sidebar }) => {
  return (
    <NavLink to={to} className={`icon-link ${sidebar && " sidebar_link"}`}>
      {title}
      {icon}
    </NavLink>
  );
};

export default LinkWithIcon;
