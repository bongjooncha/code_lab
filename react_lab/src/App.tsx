import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Count from "pages/Count";
import GetAPI from "pages/GetAPI";
import WebPrice from "pages/WebPrice";
import WebSocketsDepth from "pages/WebSockets";
import Try from "pages/Try";

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
            <Route path="/webSocketsDepth" element={<WebSocketsDepth />} />
            <Route path="/try" element={<Try />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
