import NavBar from "../NavBar"
import SideBarNav from "../SideBarNav";

const Layout = ({children}) => {
    return(
        <div>
            <NavBar />
            <SideBarNav />
            {/* <div>
            {children}
            </div> */}
        </div>
    )
}

export default Layout;