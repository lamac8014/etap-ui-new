import { lazy } from "react";
import ViewScrap from "./pages/scrap/ViewScrap";
import ViewSurplus from "./pages/surplus/ViewSurplus";

const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));

const RouteList = [
  /* Dashboard */
  {
    exact: true,
    path: "/dashboard/default",
    name: "Sample Page",
    component: SamplePage,
  },
  {
    exact: true,
    path: "/masters/scrap",
    name: "Scrap",
    component: ViewScrap,
  },
  {
    exact: true,
    path: "/masters/surplusDeclaration",
    name: "Surplus",
    component: ViewSurplus,
  },
];

export default RouteList;
