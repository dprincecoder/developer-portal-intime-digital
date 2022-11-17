import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PortalKeys from "./pages/portalKeys";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal_keys" element={<PortalKeys />} />
      </Routes>
    </>
  );
}

export default App;
