const menus = {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "eTrack",
          title: "E-Track",
          type: "collapse",
          icon: "feather icon-box",
          children: [
            {
              id: "structMgmt",
              title: "Structure Management",
              type: "collapse",
              icon: "feather icon-home",
              children: [
                {
                  id: "create",
                  title: "Create Structure",
                  type: "item",
                  icon: "feather icon-plus-circle",
                  url: "/etrack/structure/assignStructure",
                },
                {
                  id: "modify",
                  title: "Modify",
                  type: "item",
                  icon: "feather icon-edit-1",
                  url: "/etrack/structure/assignStructures",
                },
                {
                  id: "view",
                  title: "View Structure",
                  type: "item",
                  icon: "feather icon-eye",
                  url: "/etrack/structure/viewStructure",
                },
              ],
            },
            {
              id: "requirementMgmt",
              title: "Requirement Management",
              type: "collapse",
              icon: "feather icon-clock",
              children: [
                {
                  id: "reqCreation",
                  title: "Request Creation",
                  type: "item",
                  icon: "feather icon-file-plus",
                  // icon: "feather icon-home",
                  url: "/etrack/requirementmgmt/create",
                },
                {
                  id: "reqApproval",
                  title: "Request Approve",
                  type: "item",
                  icon: "feather icon-navigation",
                  // icon: "feather icon-home",
                  url: "/etrack/requirementmgmt/approve",
                },
              ],
            },
            {
              id: "fabricationMgmt",
              title: "Fabrication Management",
              type: "collapse",
              icon: "feather icon-link",
              children: [
                {
                  id: "built",
                  title: "As Built Details",
                  type: "item",
                  icon: "feather icon-info",
                  // icon: "feather icon-home",
                  url: "/etrack/fabricationMgmt/builtDetails",
                },
              ],
            },
            {
              id: "costMgmt",
              title: "Cost Management",
              type: "collapse",
              icon: "feather icon-award",
              children: [
                {
                  id: "fabCost",
                  title: "Fabrication Cost",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-tag",
                  url: "/etrack/cost/fabCost",
                },
                {
                  id: "hireChange",
                  title: "Monthly Hire Change",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-list",
                  url: "/etrack/cost/hire",
                },
                {
                  id: "bvDpr",
                  title: "BV. & DPR",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-briefcase",
                  url: "/etrack/requirementmgmt/approve",
                },
              ],
            },
            {
              id: "lifeCycle",
              title: "Life cycle Management",
              type: "collapse",
              icon: "feather icon-refresh-ccw",
              children: [
                {
                  id: "scrap",
                  title: "Scrap",
                  type: "item",
                  icon: "feather icon-trash",
                  url: "/etrack/lifeCycle/scrap",
                },
                {
                  id: "surplus",
                  title: "Surplus",
                  type: "item",
                  icon: "feather icon-package",
                  url: "/etrack/lifeCycle/surplusDeclaration",
                },
                {
                  id: "cmpc",
                  title: "CMPC Reuse",
                  type: "item",
                  icon: "feather icon-repeat",
                  url: "/etrack/lifeCycle/cmpcReuse",
                },

              ],
            },
            {
              id: "dispatchMgmt",
              title: "Dispatch Management",
              type: "collapse",
              icon: "feather icon-server",
              children: [
                {
                  id: "dispatch",
                  title: "Dispatch",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "truck",
                  url: "/etrack/dispatch/twccDispatch",
                },
                {
                  id: "procurement",
                  title: "Procurement",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-shopping-cart",
                  url: "/etrack/dispatch/procurement",
                },
                {
                  id: "vendor",
                  title: "Vendor",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-user-check",
                  url: "/etrack/dispatch/vendor",
                },
              ],
            },
            {
              id: "masters",
              title: "Masters",
              type: "collapse",
              icon: "feather icon-alert-triangle",
              children: [
                {
                  id: "ic",
                  title: "IC",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "faIndustry",
                  url: "/etrack/masters/ic",
                },
                {
                  id: "bu",
                  title: "BU",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-globe",
                  url: "/etrack/masters/bu",
                },
                {
                  id: "project",
                  title: "Project",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-share-2",
                  url: "/etrack/masters/project",
                },
                {
                  id: "wbs",
                  title: "WBS ",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-copy",
                  url: "/etrack/masters/wbs",
                },
                {
                  id: "users",
                  title: "Users",
                  type: "item",
                  icon: "feather icon-users",
                  url: "/etrack/masters/users",
                },
               
                {
                  id: "structureFmly",
                  title: "Structure Family",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-layers",
                  url: "/etrack/masters/structureFmly",
                },
                {
                  id: "structure",
                  title: "Structure",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "archive",
                  url: "/etrack/masters/structure",
                },
                {
                  id: "compType",
                  title: "Component Type",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "feather icon-grid",
                  url: "/etrack/masters/component",
                },
                {
                  id: "vendors",
                  title: "Vendors",
                  type: "item",
                  // icon: "feather icon-home",
                  icon: "database",
                  url: "/etrack/masters/viewSubContractors",
                },

              ],
            },
          ],
        },
      ],
    },
  ],
};
export default menus;
