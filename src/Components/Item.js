import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { label } = this.props.data;

    return <div className="child"> {label} </div>;
  }
}
