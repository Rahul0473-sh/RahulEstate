import './layout.scss';
import { Outlet } from "react-router-dom"
import { Navbar } from '../../Navbar/Navbar';

function Layout() {
   return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;