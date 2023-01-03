import SideBarNavItem from "./SideBarNavItem";

const SideBarNav = () => {
    return(
        <div style={{ width: "12rem",
            background: "white",
            boxShadow: "0px 1px 3px grey",
            padding: "1rem" }}>
           <SideBarNavItem />
        </div>
    )
}

export default SideBarNav;