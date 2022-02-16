const userRoles = {
    ADMIN: "Admin",
    SITE: "SITE",
    CMPC: "CMPC",
    TWCC: "TWCC",
    PROCUREMENT: "PROCUREMENT",
    PM: "PM",
    QA: "QA",
    FAA: "FAA",
    VENDOR: "VENDOR",
    BU: "BU",
    IC: "IC",
    PROJECTS: "PROJECTS",
    ALL: "ALL"
}


const userPageMapping = {
    "/etrack/dashboard/summary": [userRoles.ADMIN, userRoles.TWCC],

    "/etrack/structure/assignStructure": [userRoles.ADMIN, userRoles.CMPC],
    "/etrack/structure/modify":[userRoles.ADMIN, userRoles.CMPC],
    "/etrack/structure/modifyComponent":[userRoles.ADMIN, userRoles.CMPC],
    "/etrack/structure/viewStructure":[userRoles.ADMIN, userRoles.SITE],
    "/etrack/structure/viewComponent":[userRoles.ADMIN, userRoles.SITE],

    "/etrack/requirementmgmt/create":[userRoles.ADMIN, userRoles.SITE],
    "/etrack/requirementmgmt/requirmentApprove": [userRoles.ADMIN, userRoles.SITE, userRoles.BU, userRoles.CMPC, userRoles.TWCC],

    "/etrack/fabricationMgmt/builtDetails": [userRoles.ADMIN, userRoles.SITE],
    "/etrack/fabricationMgmt/twccModification": [userRoles.ADMIN, userRoles.TWCC],
    "/etrack/fabricationMgmt/twccVerification": [userRoles.ADMIN, userRoles.TWCC],
    "/etrack/fabricationMgmt/twccPhysicalVerificationApprove": [userRoles.ADMIN, userRoles.TWCC],

    "/etrack/fabCostPage/fabCost":[userRoles.ADMIN, userRoles.FAA],
    "/etrack/deprecitaionPage/bvDpr":[userRoles.ADMIN, userRoles.FAA],
    "/etrack/cost/fabApproval":[userRoles.ADMIN, userRoles.SITE, userRoles.PM, userRoles.TWCC, userRoles.FAA],

    "/etrack/lifeCycle/scrap":[userRoles.ADMIN,  userRoles.PROCUREMENT],
    "/etrack/lifeCycle/surplus":[userRoles.ADMIN, userRoles.TWCC, userRoles.QA, userRoles.PM],
    "/etrack/lifeCycle/surplusDeclaration":[userRoles.ADMIN, userRoles.SITE],
    "/etrack/lifeCycle/cmpcReuse":[userRoles.ADMIN, userRoles.CMPC],

    "/etrack/dispatch/twccDispatch":[userRoles.ADMIN, userRoles.TWCC],
    "/etrack/dispatch/dispatchStrt":[userRoles.ADMIN, userRoles.TWCC],
    "/etrack/dispatch/procurement":[userRoles.ADMIN, userRoles.PROCUREMENT],
    "/etrack/dispatch/vendor":[userRoles.ADMIN, userRoles.VENDOR],
    "/etrack/dispatch/vendorComp":[userRoles.ADMIN, userRoles.VENDOR],
    "/etrack/dispatch/cmpcAdd":[userRoles.ADMIN, userRoles.CMPC],

    "/etrack/masters/ic":[userRoles.ADMIN],
    "/etrack/masters/sbg": [userRoles.ADMIN],
    "/etrack/masters/bu": [userRoles.ADMIN],
    "/etrack/masters/project": [userRoles.ADMIN],
    "/etrack/masters/wbs": [userRoles.ADMIN],
    "/etrack/masters/users": [userRoles.ADMIN],
    "/etrack/masters/structureFmly": [userRoles.ADMIN],
    "/etrack/masters/structure": [userRoles.ADMIN],
    "/etrack/masters/component": [userRoles.ADMIN],
    "/etrack/masters/viewSubContractors": [userRoles.ADMIN],
}

const accessMapData = {userPageMapping, userRoles}


export default accessMapData