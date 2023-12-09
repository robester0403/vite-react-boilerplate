export interface RoutePathProps {
key: number;
}

export interface RouteConfig {
    path: string;
    component: React.ComponentType;
    children?: RouteConfig[];
  }