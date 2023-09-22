import React from "react";

import "./../../assets/styles/UI/LinkWithIcon.scss";

import { FaHome } from "react-icons/fa";

const LinkWithIcon = ({ title, icon, to, sidebar }) => {
  return (
    <a href={to} className={`icon-link ${sidebar && " sidebar_link"}`}>
      {title}
      {icon}
    </a>
  );
};

export default LinkWithIcon;
