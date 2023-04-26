import React from "react";
import Body from "./Body";
import Header from "./Header";
import styles from "./style.css";

export default function Card(props) {
  return (
    <div>
      <Header
        profileImg={props.commentObject.profileImg}
        username={props.commentObject.username}
      />
      <Body comment={props.commentObject.comment} />
    </div>
  );
}
