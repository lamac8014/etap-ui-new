import React, { Component } from "react"
import { Row, Col, Card, CardBody} from "reactstrap"
import FaIcon from "../FaIcon";
import FeatherIcon from "../FeatherIcon";
import "./cardStyles.css"

class IconInfoCard extends Component {

    render() {
        return (
            <div className="h-100">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="icon-circle-container bg-white shadow-sm">
                        {this.props.icon}
                    </div>
                </div>
                <div className="info-card shadow h-100 pb-1">
                    <div className="icon-card h-100 d-flex align-items-end">
                        <div className="card-text text-center w-100">
                            <p className="mb-0 mt-5 card-value">{this.props.value}</p>
                            <p className="m-0 card-title text-secondary">{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        //     <Card>
        //         <CardBody>
        //         <Col sm="12" className="card-body-big br h-100 py-2">
        //         <Row className="d-flex justify-content-center pt-3">
        //             <i
        //                 className={`icon mb-1 d-block mr-2 ${this.props.textColor ? this.props.textColor : null
        //                     }`}
        //             >
        //                 {this.props.icon}
        //             </i>
        //             {/* <Col md="12" className="d-flex justify-content-center"> */}
        //             <span
        //                 style={{
        //                     fontSize: "13px",
        //                     fontWeight: "bolder",
        //                     color: "black",
        //                 }}
        //             >
        //                 {this.props.text}
        //             </span>
        //             {/* </Col> */}
        //         </Row>
        //         <Row className="">
        //             <Col sm="12" className="d-flex justify-content-center pt-4">
        //                 {/* <Row className="d-flex justify-content-center"> */}
        //                 {/* </Col>
        //   <Col sm="9" className="text-md-center">
        //     <span
        //       style={{ fontSize: "13px", fontWeight: "bolder", color: "black" }}
        //     >
        //       {this.props.text1}
        //     </span>
        //     <br /> */}
        //                 <span
        //                     style={{
        //                         fontSize: "16px",
        //                         fontWeight: "bold",
        //                         // marginLeft: "10px",
        //                     }}
        //                 >
        //                     {this.props.value}
        //                 </span>
        //                 {/* </Row> */}
        //             </Col>
        //         </Row>
        //     </Col>
        //         </CardBody>
        //     </Card>
        )
    }
}

export default IconInfoCard;