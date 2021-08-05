import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const listBvDprData = () => {
    return [
  
        {
          text: "Project",
          dataField: "projName",
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
          formatter: (cell, row) => {
            return (
              <>
                <a
                  href="/etrack/deprecitaionPage/bvDprMore"
                  target="_self"
                  // onClick={() => {
                  //   redirectToFabCostMoreDetails(row.structureCode);
                  // }}
                >
                  {row.structureCode}
                </a>
              </>
            );
          },
        },
        {
            text: "Current Book Value",
            dataField: "currentValue",
            style: { verticalAlign: "middle" },
          },
        {
            text: "Actions",
            center: true,
            formatter: (cell,row) => {
              return (
                    <IconButton
                      iconname="faList"
                     /> 
                  
                ) 
            }    
        },       
    ];    
              
};
export const listBvDprMoreData = () => {
  return [
    {
      text: "Age (Months)",
      dataField: "age",
      style: { verticalAlign: "middle" },
    },

    {
      text: "Book Value",
      dataField: "bookValue",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Current Book Value",
      dataField: "currentBkValue",
      style: { verticalAlign: "middle" },
    },

  ];

};