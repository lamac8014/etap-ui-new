import { lazy } from "react";

const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));
// const Login = lazy(() => import("./containers/login/login"));

const RouteList = [
  {
    exact: true,
    path: "/dashboard/default",
    name: "Sample Page",
    component: SamplePage,
  },
];

export default RouteList;
