import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./articles";
import ArticlePage from "./article";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="App-header" >
          <Link className="header-link" to="/">SHARETRADE.COM</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

