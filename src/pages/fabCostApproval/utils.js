import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const fabApproveMetaData = (
    handleViewMore,
    handleApprove,
    handleReject
) => {
    return [

        {
            text: "DA/DC Number",
            dataField: "dcNumber",
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
            // formatter: (cell, row) => {
            //     return (
            //       <>
            //         <a
            //           href="#"
            //           onClick={(e) => {
            //             e.preventDefault();
            //           }}
            //         >
            //           {row.structureCode}
            //         </a>
            //       </>
            //     );
            //   },
        },
        {
            text: "Status",
            dataField: "status",
            style: { verticalAlign: "middle" },
        },
        {
            text: "Actions",
            center: true,
            formatter: (cell, row) => {
                return (
                    <div>
                        <IconButton
                            iconname="faList"
                            onClick= {() => {handleViewMore(row.id)}}
                        />
                        <IconButton
                            iconname="faThumbsUp"
                            onClick= {() => {handleApprove(row.id)}}
                        />
                        <IconButton
                            iconname="faThumbsDown"
                            onClick= {() => {handleReject(row.id)}}
                        />

                    </div>
                );
            },
        },
    ];

};