import React, { Component } from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import Visual3 from "./Visual3";
import Visualization1 from "./Visualization1";
import Visual2 from "./Visual2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  set_data = (csv_data) => {
    this.setState({ data: csv_data });
  }

  render() {
    return (
      <div className="grand-parent" style={{display: "flex", flexDirection:"column"}}>
        <FileUpload set_data={this.set_data}></FileUpload>
        <div className="parent" style={{display: "flex", flexDirection:"column"}}>
          <div className="row1" style={{display:"flex", flexDirection:"row", flex: 1, justifyContent:"center", alignItems:"center"}}>
            <div className="visualization" style={{display:"flex", flex:1, justifyContent:"center", alignItems:"center"}}>
              <Visualization1  csv_data={this.state.data}></Visualization1>
            </div>
            <div className="visualization" style={{display:"flex", flex:1, justifyContent:"center", alignItems:"center"}}>
              <Visual3 csv_data={this.state.data}></Visual3>
            </div>
          </div>
            <div className="row2" style={{display:"flex", flexDirection:"row", flex: 1, justifyContent:"center", alignItems:"center"}}>
              <Visual2 csv_data={this.state.data}></Visual2>
            </div>
        </div>
      </div>
    );
  }
}

export default App;