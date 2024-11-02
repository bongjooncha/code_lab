import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Count from "pages/Count";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Count />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
