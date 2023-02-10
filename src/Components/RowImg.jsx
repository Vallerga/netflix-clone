import { Component } from "react";

class RowImg extends Component {
  render() {
    return (
      <>
      <div className="mt-4 mb-3" style = {{color:'white', fontSize:'20px', fontWeight: 'bold'}}>Trending Now</div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-between mb-4">
            <div className="col-2">
              <img src={require("../assets/1.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/2.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/3.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/4.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/5.png")} alt="title" />
            </div>
            <div className="col-2">
              <img src={require("../assets/6.png")} alt="title" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RowImg;
