import { lazy } from "react";

const SamplePage = lazy(() => import("./pages/samplePage/SamplePage"));

const RouteList = [
  /* Dashboard */
  {
    exact: true,
    path: "/dashboard/default",
    name: "Sample Page",
    component: SamplePage,
  },
];

export default RouteList;
