import React from "react";

import "../../assets/styles/UI/Table.scss";

const Table = ({ headings, children }) => {
  return (
    <table className="common_table">
      <thead>
        {headings.map((heading, index) => {
          return <th key={index}>{heading}</th>;
        })}
      </thead>

      {children}
    </table>
  );
};

export default Table;
