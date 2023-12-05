import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutePath from './RoutePath';
import { RoutePathProps } from '../types/component-types';

const AppRouter: React.FC<RoutePathProps> = ({ key }) => {
  return (
    <Router>
      <RoutePath key={key} />
    </Router>
  );
};

export default AppRouter;
