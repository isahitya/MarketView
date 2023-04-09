import React from "react";
import "../../App.css";

export default function (props) {
  const list = props.list;
  console.log(list);
  return (
    <div className={"watchlist-card"}>
      {list.name}
      <ul>
        {list.symbols.length > 0 && list.symbols.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}
