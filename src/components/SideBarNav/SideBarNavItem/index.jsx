import React from "react";
import { sideBarData } from "../../../data"

const SideBarNavItem = () => {
    return(
       <React.Fragment>
       {sideBarData.map((data, index) => (
        <div key={index} className="d-flex align-items-center px-2 py-3">
           <a href="/" className="nav-link d-flex align-items-center">
            <span className="material-symbols-outlined">{data.icon} </span>
            <span className="fw-semibold"> &nbsp; {data.title}</span>
            </a>
        </div>
       ))}
        </React.Fragment>
    )
}

export default SideBarNavItem;