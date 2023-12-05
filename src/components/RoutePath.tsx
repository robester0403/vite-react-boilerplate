import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { RoutePathProps } from '../types/component-types';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

const RoutePath: React.FC<RoutePathProps> = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index} 
        path={route.path}
        element={route.element}
      />
    ))}
  </Routes>
);

export default RoutePath;
