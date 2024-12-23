import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Count from "pages/Count";
import GetAPI from "pages/GetAPI";
import WebPrice from "pages/WebPrice";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Count />} />
            <Route path="/count" element={<Count />} />
            <Route path="/getAPI" element={<GetAPI />} />
            <Route path="/webSocketPrice" element={<WebPrice />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
