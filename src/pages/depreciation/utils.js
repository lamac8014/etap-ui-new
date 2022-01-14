import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const listBvDprData = (redirectToFabCostMoreDetails, showModal) => {
    return [
  
        {
          text: "Project",
          dataField: "projectName",
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
                  href="#"
                  target="_self"
                  onClick={(e) => {
                    e.preventDefault();
                    redirectToFabCostMoreDetails(row.fabricationCost, row.fabricationDate, row.structureName, row.structureCode);
                  }}
                >
                  {row.structureCode}
                </a>
              </>
            );
          },
        },
        {
            text: "Current Book Value",
            dataField: "currentBookValue",
            style: { verticalAlign: "middle" },
            formatter: (cell, row) => {
              return (
                  <p style={{margin: 0}}>&#8377; {parseFloat(row.currentBookValue).toFixed(2)}</p>
              );
            },
          },
        {
            text: "Actions",
            center: true,
            formatter: (cell,row) => {
              return (
                    <IconButton
                      iconname="faList"
                      onClick={() => {showModal(row.structureCode)}}
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
      dataField: "prevAmount",
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => {
        return (
            <p style={{margin: 0}}>&#8377; {row.prevAmount}</p>
        );
      },
    },
    {
      text: "Current Book Value",
      dataField: "amount",
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => {
        return (
            <p style={{margin: 0}}>&#8377; {row.amount}</p>
        );
      },
    },

  ];

};