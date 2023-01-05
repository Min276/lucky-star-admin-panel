import NavBar from "../NavBar";
import SideBarNav from "../SideBarNav";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="d-flex" style={{ paddingTop: "5rem" }}>
        <SideBarNav />
        <div
          className="d-block w-100"
          style={{ marginLeft: "240px", background: "#f9fbfd" }}
        >
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;