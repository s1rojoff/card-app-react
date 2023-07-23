import { Component } from "react";
export default class Card extends Component {
  render() {
    const { id, name, body } = this.props;
    return (
      <div className="card w-50 p-3 position-relative">
        <p className="text-end fw-bold fs-4">ID: {id}</p>
        <p className="fs-3 fw-bold text-center">{name}</p>
        <p>{body}</p>
        <div className="text-end position-absolute">
          <button className="btn btn-success">edit</button>
          <button className="btn btn-danger ms-1">delete</button>
        </div>
      </div>
    );
  }
}
