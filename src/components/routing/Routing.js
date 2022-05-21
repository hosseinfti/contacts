import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import NotFound from "../notFound/NotFound";
import Table from "../table/Table";
import User from "../user/User";


class Routing extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contacts" element={<Table />} />
            <Route exact path="/contacts/user" element={<User />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Router>
    );
  }
}

export default Routing;
