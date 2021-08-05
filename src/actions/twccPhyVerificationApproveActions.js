import store from "../store";
import axios from "axios";
import config from "../config";
import {
    GET_PHYSICAL_VERIFICATION_STRUCTURE,
} from "./types";
import { getUserDetails } from "../utils/auth";

export const getTwccPhyVerificationApproveData = () => {
    return {
        type: GET_PHYSICAL_VERIFICATION_STRUCTURE,
        payload: axios.get(
            config.BASE_URL +
            "/api/PhysicalVerification/GetPhysicalVerificationStructureForapprove"
        ),
    };
};