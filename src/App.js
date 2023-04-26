import React from "react";
import { comments } from "./commentData";
import Card from "./Card";

export default function App() {
  return comments.map((comment) => <Card commentObject={comment} />);
}
