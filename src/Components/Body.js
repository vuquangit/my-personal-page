import React, { Component } from "react";
import Item from "./Item";
import data from "./mock.json";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          {!data.lenght && data.map(item => <Item key={item.id} data={item} />)}
        </div>
      </div>
    );
  }
}
