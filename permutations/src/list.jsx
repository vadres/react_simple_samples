import React from "react";
import ReactDOM from "react-dom";

export default class List extends React.Component {
  render() {
    const list = this.props.items.map((el, i) => (
      <span className="item" key={i}>
        {el}
      </span>
    ));

    // if (this.props.items.length === 1 && this.props.items[0] === undefined)
    return <div className="list">{list}</div>;
    //   else return false;
  }
}
