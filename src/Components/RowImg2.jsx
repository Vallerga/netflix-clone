import { Component } from "react";

class RowImg2 extends Component {
  render() {
    return (
      <>
        <div className="mb-4" style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        New Releases
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-between mb-4">
            <div className="col-2">
              <img src={require("../assets/13.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/14.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/15.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/16.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/17.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/18.png")} alt="title" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RowImg2;
