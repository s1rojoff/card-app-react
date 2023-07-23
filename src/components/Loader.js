import { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center">
        <div
          class="spinner-border loader"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
