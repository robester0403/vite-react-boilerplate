export interface RoutePathProps {
key: number;
}

export interface RouteConfig {
    path: string;
    exact: boolean;
    component: React.ComponentType<RoutePathProps>;
  }