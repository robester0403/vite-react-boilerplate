import Home from "./pages/home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  {
    path: '/',
    component: Home,
  },
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
