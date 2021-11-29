import React from "react";

export const User = (props) => {
  return (
    <span className="user">
      <span className="name">{props.userData.name}</span>
      <span className="handle">{props.userData.handle}</span>
    </span>
  );
};
