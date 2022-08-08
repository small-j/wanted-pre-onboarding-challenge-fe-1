import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Auth from "./views/Auth";

function CustomRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;
