import { lazy } from "react";

const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));
const ViewScrap = lazy(() => import("./containers/scrap/viewScrap"));
const ViewSurplus = lazy(() => import("./containers/surplus/viewSurplus"));
const ViewCmpcReuse = lazy(() =>
  import("./containers/cmpcReuse/viewCmpcReuse")
);
// const Login = lazy(() => import("./containers/login/login"));

const RouteList = [
  {
    exact: true,
    path: "/dashboard/default",
    name: "Sample Page",
    component: SamplePage,
  },
  {
    exact: true,
    path: "/etrack/masters/scrap",
    name: "Scrap",
    component: ViewScrap,
  },
  {
    exact: true,
    path: "/etrack/masters/surplusDeclaration",
    name: "Surplus",
    component: ViewSurplus,
  },
  {
    exact: true,
    path: "/etrack/masters/cmpcReuse",
    name: "CMPC Reuse",
    component: ViewCmpcReuse,
  },
];

export default RouteList;
