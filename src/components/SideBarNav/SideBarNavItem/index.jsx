import React from "react";
import { sideBarData } from "../../../data";
import styles from "./sideBarItem.module.css";

const SideBarNavItem = () => {
  return (
    <React.Fragment>
      {sideBarData.map((data, index) => (
        <div key={index}>
          {data.tabTitle ? (
            <div key={index}>
              <div
                className="mt-2 pb-4"
                style={{
                  borderTop: "1.5px solid #eaeaea",
                  marginRight: "-24px",
                }}
              ></div>
              <h2 className="h6 px-2 text-uppercase fw-medium">
                {" "}
                {data.tabTitle}{" "}
              </h2>
            </div>
          ) : (
            <div key={index} className="d-flex align-items-center px-2 py-3">
              <a href={data.route} className={styles.navBar_Tab}>
                <span className="material-symbols-outlined">{data.icon} </span>
                <span className="fw-medium"> &nbsp; {data.title}</span>
              </a>
            </div>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default SideBarNavItem;