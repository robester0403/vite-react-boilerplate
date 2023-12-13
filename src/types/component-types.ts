import React from "react";

export interface RouteConfig {
  path: string;
  component: React.FC;
  children?: RouteConfig[];
}

