import SideBarNavItem from "./SideBarNavItem";
import styles from "./SideBar.module.css";

const SideBarNav = () => {
  return (
    <div className={styles.sideBar_Nav}>
      <SideBarNavItem />
    </div>
  );
};

export default SideBarNav;