import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const listTwccApproveData = () => {
    return [

        {
            text: "Inspection Id",
            dataField: "inspectionId",
            style: { verticalAlign: "middle" },
        },

        {
            text: "Structure Name",
            dataField: "structureName",
            style: { verticalAlign: "middle" },
        },
        {
            text: "Structure Code",
            dataField: "structureCode",
            style: { verticalAlign: "middle" },
        },
        {
            text: "Site",
            dataField: "site",
            style: { verticalAlign: "middle" },
        },
        {
            text: "Actions",
            center: true,
            formatter: (cell, row) => {
                return (
                    <div>
                        <IconButton
                            iconname="faEdit"
                        />

                        <IconButton
                            iconname="faEye"
                        />

                        <IconButton
                            type="success"
                            iconname="faThumbsUp"
                        />
                        <IconButton
                            type="danger"
                            iconname="faThumbsDown"
                        />

                    </div>
                );
            },
        },
    ];

};