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
const VendorComponent = lazy(() =>
	import("./containers/siteDispatch/componentPage")
);

const ViewProject = lazy(() =>
	import("./containers/project/viewProjectContainer")
);
// const ViewDispatch = lazy(() => import("./containers/createDispatch/createDispatch"));
const ViewFabricationCost = lazy(() =>
	import("./containers/fabricationCost/fabricationCost")
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
const ViewStructureFamily = lazy(() =>
	import("./containers/structureFamily/viewStructureFamily")
);
const CreateDispatch = lazy(() =>
	import("./containers/createDispatch/createDispatch")
);
const Wbs = lazy(() => import("./containers/workBreak/addWorkBreak"));
const ViewSubContractor = lazy(() =>
	import("./containers/subContractor/viewSubContractor")
);
const Users = lazy(() => import("./containers/users/viewUsers"));
const Structure = lazy(() => import("./containers/structure/viewStructure"));
const Component = lazy(() => import("./containers/component/viewComponent"));
const AddRequirement = lazy(() =>
	import("./containers/requirement/addRequirement")
);
const AssignStructure = lazy(() =>
	import("./containers/assignStructure/assignStructure")
);
const Asbuilt = lazy(() => import("./containers/built/built"));
const AsbuiltMore = lazy(() => import("./containers/built/builtMoreDetails"));

const RequirmentApproval = lazy(() =>
	import("./containers/requirmentApproval/viewRequirmentApproval")
);
const Requirment = lazy(() =>
	import("./containers/requirement/viewRequirementAction")
);
const DispatchStructure = lazy(() =>
	import("./containers/createDispatch/dispatchStructure")
);

const ViewSbg = lazy(() => import("./containers/sbg/viewSbg"));
const CmpcModification = lazy(() =>
	import("./containers/cmpcModification/viewStructures")
);
const ModifyComponents = lazy(() =>
	import("./containers/cmpcModification/modifyComponents")
);

const CmpcViewPage = lazy(() =>
	import("./containers/cmpcAddComponents/cmpcViewPage")
);
const CmpcAddComponentsPage = lazy(() =>
	import("./containers/cmpcAddComponents/cmpcAddComponents")
);
const ViewtwccModification = lazy(() =>
	import("./containers/twccModification/twccModification")
);
const ViewtwccVerification = lazy(() =>
	import("./containers/twccVerification/twccVerification")
);

const RouteList = [
	{
		exact: true,
		path: "/notFound",
		name: "404",
		component: NotFound,
	},
	{
		exact: true,
		path: "/etrack/lifeCycle/scrap",
		name: "Scrap",
		component: ViewScrap,
	},
	{
		exact: true,
		path: "/etrack/lifeCycle/surplusDeclaration",
		name: "Surplus",
		component: ViewSurplus,
	},
	{
		exact: true,
		path: "/etrack/lifeCycle/cmpcReuse",
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
		path: "/etrack/structure/viewComponent/:structId/:projectId",
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
		path: "/etrack/masters/structureFmly",
		name: "Structure Family",
		component: ViewStructureFamily,
	},
	{
		exact: true,
		path: "/etrack/dispatch/twccDispatch",
		name: "Dispatch",
		component: CreateDispatch,
	},
	{
		exact: true,
		path: "/etrack/masters/project",
		name: "Project",
		component: ViewProject,
	},
	{
		exact: true,
		path: "/etrack/masters/viewSubContractors",
		name: "Dispatch",
		component: ViewSubContractor,
	},
	{
		exact: true,
		path: "/etrack/masters/wbs",
		name: "WBS",
		component: Wbs,
	},
	{
		exact: true,
		path: "/etrack/dispatch/dispatchStrt/:structId/:siteReqId",
		name: "Dispatch Structure",
		component: DispatchStructure,
	},
	{
		exact: true,
		path: "/etrack/cost/fabcost",
		name: "Fabrication Cost",
		component: ViewFabricationCost,
	},
	{
		exact: true,
		path: "/etrack/masters/users",
		name: "Users",
		component: Users,
	},
	{
		exact: true,
		path: "/etrack/masters/structure",
		name: "Structure",
		component: Structure,
	},
	{
		exact: true,
		path: "/etrack/masters/component",
		name: "Component Type",
		component: Component,
	},
	{
		exact: true,
		path: "/etrack/requirementmgmt/create",
		name: "Add Requirement",
		component: AddRequirement,
	},
	{
		exact: true,
		path: "/etrack/structure/assignStructure",
		name: "Create Structure",
		component: AssignStructure,
	},
	{
		exact: true,
		path: "/etrack/fabricationMgmt/builtDetails",
		name: "As Built Details",
		component: Asbuilt,
	},
	{
		exact: true,
		path: "/etrack/built/asBuiltDetails/:siteReqId",
		name: "Structure Details",
		component: AsbuiltMore,
	},
	{
		exact: true,
		path: "/etrack/requirementmgmt/requirmentApprove",
		name: "Request Approve",
		component: Requirment,
	},
	{
		exact: true,
		path: "/etrack/masters/sbg",
		name: "Strategic Business Group",
		component: ViewSbg,
	},
	{
		exact: true,
		path: "/etrack/structure/modify",
		name: "Modify Structure",
		component: CmpcModification,
	},
	{
		exact: true,
		path:
			"/etrack/structure/modifyComponent/:dispStructId/:dispReqId/:projStrId/:structName/:structCode/:project",
		name: "Modify Components",
		component: ModifyComponents,
	},
	{
		exact: true,
		path: "/etrack/dispatch/cmpcAdd",
		name: "Add Components",
		component: CmpcViewPage,
	},
	{
		exact: true,
		path: "/etrack/dispatch/cmpcAdd/:projStructId/:dispStructId",
		name: "Add Components",
		component: CmpcAddComponentsPage,
	},
	{
		exact: true,
		path:
			"/etrack/dispatch/vendorComp/:dispStrId/:subContId/:count/:name/:code",
		name: "Add Components",
		component: VendorComponent,
	},
	{
		exact: true,
		path: "/etrack/dispatch/twccModification",
		name: "twccModification",
		component: ViewtwccModification,
	},
	{
		exact: true,
		path: "/etrack/dispatch/twccVerification",
		name: "twccVerification",
		component: ViewtwccVerification,
	},
];
export default RouteList;
