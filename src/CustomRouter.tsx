import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

function CustomRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="auth" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;
