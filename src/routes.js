import { lazy } from "react";

// const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));
const ViewScrap = lazy(() => import("./containers/scrap/viewScrap"));
const ViewSurplus = lazy(() => import("./containers/surplus/viewSurplus"));
const ViewStructure = lazy(() =>
  import("./containers/assignStructure/viewAssignStructure")
);
const ViewComponent = lazy(() =>
  import("./containers/assignStructure/viewAssignComponent")
);
const ViewProcurement = lazy(() =>
  import("./containers/procurement/procurement")
);
const ViewVendor = lazy(() => import("./containers/siteDispatch/siteDispatch"));
const ViewProject = lazy(() =>
  import("./containers/project/viewProjectContainer")
);

const ViewCmpcReuse = lazy(() =>
  import("./containers/cmpcReuse/viewCmpcReuse")
);
const NotFound = lazy(() => import("./pages/maintenance/404NotFound"));
const Login = lazy(() => import("./containers/login/login"));
const Ic = lazy(() =>
  import("./containers/independentCompany/viewIndependentCompany")
);
const Bu = lazy(() => import("./containers/businessUnit/viewBusinessUnit"));
const Wbs = lazy(() => import("./containers/workBreak/addWorkBreak"));

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
  },
  {
    exact: true,
    path: "/etrack/masters/project",
    name: "Project",
    component: ViewProject,
  },
  {
    exact: true,
    path: "/etrack/masters/wbs",
    name: "WBS",
    component: Wbs,
  },
];
export default RouteList;
