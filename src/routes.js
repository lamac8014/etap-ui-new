import { lazy } from "react";

const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));
const ViewScrap = lazy(() => import("./containers/scrap/viewScrap"));
const ViewSurplus = lazy(() => import("./containers/surplus/viewSurplus"));
const ViewStructure = lazy(() => import("./containers/assignStructure/viewAssignStructure"));
const ViewComponent = lazy(() => import("./containers/assignStructure/viewAssignComponent"));
const ViewProcurement = lazy(() => import("./containers/procurement/procurement"));
const ViewVendor = lazy(() => import("./containers/siteDispatch/siteDispatch"));
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
  {
    exact: true,
    path: "/etrack/structure/viewStructure",
    name: "View Structure",
    component: ViewStructure,
  },
  {
    exact: true,
    path: "/etrack/structure/viewComponent",
    name: "View Component",
    component: ViewComponent,
  },
  {
    exact: true,
    path: "/etrack/dispatch/procurement",
    name: "Procurement",
    component: ViewProcurement,
  },
  {
    exact: true,
    path: "/etrack/dispatch/vendor",
    name: "Vendor",
    component: ViewVendor,
  }
];

export default RouteList;


