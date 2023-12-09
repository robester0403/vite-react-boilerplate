import Home from "./pages/home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
