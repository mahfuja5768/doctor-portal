import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appointment from "../../pages/Appointments/Appointment/Appointment";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoutes/AdminRoute";
import ContactUs from "../../pages/Home/ContactUs/ContactUs";
import Testimonial from "../../pages/Home/Testimonial/Testimonial";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/about',
                element:<Testimonial></Testimonial>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addDoctors',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
        ]
    }
])

export default router;