import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home"
import Main from './pages/Main';
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/Login" element={<Login />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/Main" element={<Main />}>
        <Route index element={<Main />} />
      </Route>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
