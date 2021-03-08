import { lazy } from "react";

const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));
const ViewScrap = lazy(() => import("./containers/scrap/viewScrap"));
const ViewSurplus = lazy(() => import("./containers/surplus/viewSurplus"));
const ViewCmpcReuse = lazy(() =>
  import("./containers/cmpcReuse/viewCmpcReuse")
);
const NotFound = lazy(() => import("./pages/maintenance/404NotFound"));
const Login = lazy(() => import("./containers/login/login"));
const Ic = lazy(() =>
  import("./containers/independentCompany/viewIndependentCompany")
);
const Bu = lazy(() => import("./containers/businessUnit/viewBusinessUnit"));

const RouteList = [
  {
    exact: true,
    path: "/notFound",
    name: "404",
    component: NotFound,
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
  {
    exact: true,
    path: "/",
    name: "CMPC Reuse",
    component: Login,
  },
  {
    exact: true,
    path: "/etrack/masters/ic",
    name: "IC",
    component: Ic,
  },
  {
    exact: true,
    path: "/etrack/masters/bu",
    name: "BU",
    component: Bu,
  },
];
export default RouteList;
