import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteConfig } from './types/component-types';

const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => {
    const { path, component: Component, children } = route;
    return (
      <Route key={path} path={path} element={<Component />}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
};


function App({ routes }: { routes: RouteConfig[] }) {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}


export default App;
