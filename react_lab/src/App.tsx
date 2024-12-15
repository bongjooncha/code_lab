import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Count from "pages/Count";
import GetAPI from "pages/GetAPI";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/count" element={<Count />} />
            <Route path="/getAPI" element={<GetAPI />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
