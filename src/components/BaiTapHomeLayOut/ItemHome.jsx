import React, { Component } from "react";

export default class ItemHome extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header p-0">
            <img
              className="w-100"
              src="https://reactjs.org/logo-og.png"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
