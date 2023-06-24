import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Error } from "./page/error";
import { Success } from "./page/success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
