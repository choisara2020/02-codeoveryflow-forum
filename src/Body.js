import React from "react";
import styles from "./style.css";

//handles just  the comments
export default function Body(props) {
  return (
    <div>
      <p>{props.comment}</p>
    </div>
  );
}
