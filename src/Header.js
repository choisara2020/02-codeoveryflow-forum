import React from "react";
//handles profileImg and username in comments

export default function Header(props) {
  return (
    <div>
      <img src={props.profileImg} />
      <h1>{props.usesrname}</h1>
    </div>
  );
}
