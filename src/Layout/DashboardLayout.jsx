import React, { useContext } from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../pages/contexts/AuthProvider";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to='/dashboard'>My Appointments</Link>
            </li>
            { isAdmin &&
              <>
              <li>
              <Link to='/dashboard/users'>All Users</Link>
            </li>
              <li>
              <Link to='/dashboard/addDoctors'>Add A Doctor</Link>
            </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
