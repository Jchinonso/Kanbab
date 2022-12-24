import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Repository } from "./components/Repository";

import { GitHubRepositoryForm } from "./components/RepositoryForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/board"
          element={<Repository />}
        ></Route>
        <Route path="/" element={<GitHubRepositoryForm />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
