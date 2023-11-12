import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Wrapper } from "@components/layouts";
import { Home, Hospitals, DetailHospital } from "@pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/rumah-sakit" element={<Hospitals />} />
          <Route path="/rumah-sakit/detail/:id" element={<DetailHospital />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
