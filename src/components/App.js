import { Component } from "react";
import Card from "./Card";
import axios from "axios";
import Loader from "./Loader";
class App extends Component {
  state = {
    posts: [],
    loader: false,
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        this.setState({
          posts: res.data,
          loader: true,
        });
      });
  }

  render() {
    const { posts, loader } = this.state;
    return (
      <div>
        <h3 className="text-center bg-info text-white py-3">Card app</h3>
        <div className="container">
          {loader ? (
            <div className="d-flex w-100 gap-3 flex-wrap">
              {posts.map((data) => (
                <Card id={data.id} name={data.name} body={data.body} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default App;
