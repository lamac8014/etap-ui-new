import store from "../store";
import axios from "axios";
import config from "../config";
import {
  LIST_VENDOR,
  GET_SINGLE_VENDOR,
  UPDATE_VENDOR,
  CREATE_VENDOR,
  GET_VENDOR_TYPE,
} from "./types";

//Add Vendor
export const createVendor = () => {
  const vendor = store.getState().vendor;
  let tmpArr = vendor.venServList.filter((dt) => dt.checked === true);
  let venServList = [];
  tmpArr.forEach((element) => {
    venServList.push({
      serviceTypeId: element.id,
    });
  });
  const data = {
    name: vendor.vendorName,
    email: vendor.email,
    vendorCode: vendor.vendorCode,
    phoneNunmber: vendor.contactNumber,
    isStatus: vendor.isStatus,
    vendorServiceTypeDetails: venServList,
  };
  return {
    type: CREATE_VENDOR,
    payload: axios.post(config.BASE_URL + "/api/Vendor/createVendor", data),
  };
};

export const updateVendor = () => {
  const vendor = store.getState().vendor;
  const status = vendor.vendorStatus.label === "Active" ? true : false;

  const tranformServTypeList = (data) => {
    let tmpArr = [];
    data &&
      data.map((dt) => {
        if (dt.checked === true) {
          const ele = {
            id: dt.serviceId,
            vendorId: dt.vendorId,
            serviceTypeId: dt.id,
          };
          tmpArr.push(ele);
        }
      });
    console.log(`Converted Array ${JSON.stringify(tmpArr)}`);
    return tmpArr;
  };

  const data = {
    id: vendor.id,
    vendorCode: vendor.vendorCode,
    name: vendor.vendorName,
    email: vendor.email,
    phoneNunmber: vendor.contactNumber,
    isStatus: status,
    vendorServiceTypeDetails: tranformServTypeList(vendor.venServList),
  };
  return {
    type: UPDATE_VENDOR,
    payload: axios.put(
      config.BASE_URL + "/api/Vendor/updateVendor/" + vendor.id,
      data
    ),
  };
};

export const vendorList = () => {
  return {
    type: LIST_VENDOR,
    payload: axios.get(config.BASE_URL + "/api/Vendor/getVendorDetails"),
  };
};

export const getSingleVendor = (id) => {
  return {
    type: GET_SINGLE_VENDOR,
    payload: axios.get(
      config.BASE_URL + "/api/Vendor/getVendorDetailsById/" + id
    ),
  };
};

export const getVendorServiceList = () => {
  return {
    type: GET_VENDOR_TYPE,
    payload: axios.get(config.BASE_URL + "/api/Vendor/vendorCodeList"),
  };
};
