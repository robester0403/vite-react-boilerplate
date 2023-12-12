export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  children?: RouteConfig[];
}

export interface RouterProps {
  route: RouteConfig[];
}
