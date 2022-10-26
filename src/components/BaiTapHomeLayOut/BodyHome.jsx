import React, { Component } from "react";
import BannerHome from "./BannerHome";
import ItemHome from "./ItemHome";

export default class BodyHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <BannerHome />
          </div>
          <div className="col-3">
            <ItemHome />
          </div>
          <div className="col-3">
            <ItemHome />
          </div>
          <div className="col-3">
            <ItemHome />
          </div>
          <div className="col-3">
            <ItemHome />
          </div>
        </div>
      </div>
    );
  }
}
