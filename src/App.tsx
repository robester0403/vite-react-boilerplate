import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteConfig } from './types/component-types';
import Home from './pages/home';

const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={<route.element />}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const appRoutes: RouteConfig[] = [
  {
    path: '/',
    element: Home,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(appRoutes)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
