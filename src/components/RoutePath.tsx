import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    }
]

const RoutePath = () => (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Routes>
  );
  
  export default RoutePath;