import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Wrapper } from "@components/layouts";
import { Home } from "@pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
