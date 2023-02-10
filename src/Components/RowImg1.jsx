import { Component } from "react";

class RowImg1 extends Component {
  render() {
    return (
      <>
        <div className="mb-4" style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        Watch it Again
        </div>

        <div className="container-fluid">
          <div className="row d-flex justify-content-between mb-4">
            <div className="col-2">
              <img src={require("../assets/7.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/8.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/9.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/10.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/11.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/12.png")} alt="title" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RowImg1;
