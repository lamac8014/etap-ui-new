import { combineReducers } from "redux";
import config from "./templateConfigReducer";
import Navigation from "./navigationsReducer";
import componentReducer from "./componentReducer";
import structureReducer from "./structureReducer";
import transferPriceReducer from "./transferPriceReducer";
import wbsReducer from "./wbsReducer";
import projReducer from "./projectReducer";
import independentCompanyReducer from "./independentCompanyReducer";
import usersReducer from "./userReducer";
import structureFamilyReducer from "./structureFamilyReducer";
import vendorReducer from "./vendorReducer";
import businessUnitReducer from "./businessUnitReducer";
import requirementReducer from "./requirementReducer";
import assignStructureReducer from "./assignStructureReducer";
import structCompReducer from "./structCompReducer";
import authReducer from "./authReducer";
import surplusReducer from "./surplusReducer";
import scrapReducer from "./scrapReducer";
import siteDispatchReducer from "./siteDispatchReducer";
import procurementReducer from "./procurementReducer";
import siteApprovalReducer from "./siteApprovalReducer";
import newFabricationVendorReducer from "./newFabricationVendorReducer";
import outSourcingSiteApprovalReducer from "./outSourcingSiteApprovalReducer";
import conditionAssessmentReducer from "./conditionAssessmentReducer";
import fromSiteApprovalReducer from "./fromSiteApprovalReducer";
import toSiteApprovalReducer from "./toSiteApprovalReducer";
import createDispatchReducer from "./createDispatchReducer";
import physicalVerificationReducer from "./physicalVerificationReducer";
import fabricationCostReducer from "./fabricationCostReducer";
import builtReducer from "./builtReducer";
import scrapPageReducer from "./scrapPageReducer";
import cmpcReuseReducer from "./cmpcReuseReducer";
import requirmentApprovalReducer from "./requirmentApprovalReducer";
import sbgReducer from "./sgbReducer";
import cmpcReducer from "./cmpcModificationReducer";
import cmpcAddReducer from "./cmpcAddComponentsReducer";
import twccReducer from "./twccModificationReducer";
import fabCostReducer from "./fabCostReducer";
import twccPhyVerificationApproveReducer from "./twccPhyVerificationApproveReducer";
import bvDprReducer from "./bvDprReducer";
import fabCostApprovalReducer from "./fabCostApprovalReducer";
const rootReducer = combineReducers({
  config,
  Navigation,
  structure: structureReducer,
  transferPrice: transferPriceReducer,
  component: componentReducer,
  wbs: wbsReducer,
  proj: projReducer,
  icbu: independentCompanyReducer,
  users: usersReducer,
  structureFamily: structureFamilyReducer,
  vendor: vendorReducer,
  businessUnit: businessUnitReducer,
  assignStructure: assignStructureReducer,
  scr: structCompReducer,
  auth: authReducer,
  surplus: surplusReducer,
  scrap: scrapReducer,
  // scrap: scrapPageReducer,
  siteDispatch: siteDispatchReducer,
  procurement: procurementReducer,
  siteApproval: siteApprovalReducer,
  newFabricationVendor: newFabricationVendorReducer,
  outSourcingsiteApproval: outSourcingSiteApprovalReducer,
  conditionAssessment: conditionAssessmentReducer,
  fromSiteApproval: fromSiteApprovalReducer,
  toSiteApproval: toSiteApprovalReducer,
  createDispatch: createDispatchReducer,
  requirement: requirementReducer,
  physicalVerification: physicalVerificationReducer,
  fabCost: fabricationCostReducer,
  built: builtReducer,
  cmpcReuse: cmpcReuseReducer,
  requirmentApproval: requirmentApprovalReducer,
  sbg: sbgReducer,
  cmpc: cmpcReducer,
  cmpcAdd: cmpcAddReducer,
  twcc: twccReducer,
  fabricationCost:fabCostReducer,
  twccPhyVerificationApprove : twccPhyVerificationApproveReducer,
  bvDpr: bvDprReducer,
  fabCostApprove: fabCostApprovalReducer
});

export default rootReducer;
