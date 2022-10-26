import React, { Component } from "react";

export default class BannerHome extends Component {
  render() {
    return (
      <div className="text-center bg-light">
        <div className="p-5 my-3">
          <h1 className="font-weight-bold">A warm welcome!</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary">Call to action</button>
        </div>
      </div>
    );
  }
}
