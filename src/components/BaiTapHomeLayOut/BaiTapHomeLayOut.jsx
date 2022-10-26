import React, { Component } from "react";
import BodyHome from "./BodyHome";
import FooterHome from "./FooterHome";
import HeaderHome from "./HeaderHome";

export default class BaiTapHomeLayOut extends Component {
  render() {
    return (
      <div>
        <HeaderHome />
        <BodyHome />
        <FooterHome />
      </div>
    );
  }
}
