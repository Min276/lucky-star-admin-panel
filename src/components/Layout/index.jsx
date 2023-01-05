import NavBar from "../NavBar";
import SideBarNav from "../SideBarNav";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={styles.main_wrapper}>
        <SideBarNav />
        <div
          className={styles.wrapper}
        >
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;