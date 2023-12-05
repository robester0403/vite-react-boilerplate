import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { RouteConfig } from '../types/component-types';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

const RoutePath: React.FC<{ key: number }> = ({ key }) => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index} 
        path={route.path}
        element={<route.component key={key} />} 
      />
    ))}
  </Routes>
);

export default RoutePath;
