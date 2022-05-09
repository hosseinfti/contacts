import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Table from "../table/Table";


class Routing extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contacts" element={<Table />} />
          </Routes>
        </Router>
    );
  }
}

export default Routing;
