import Home from "../pages/Home/Home"; 
import About from "../pages/About/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import configs from "../config";
import EmptyLayout from "../Layout/EmtyLayout/index";

const routes = [
    {
        path: configs.home,
        component : Home,
    },

    {
        path: configs.about,
        component : About,
    },
    {
        path: configs.contact,
        component : Contact,
    },
    {
        path: configs.login,
        component : Login,
        layout :  EmptyLayout// Sử dụng DeafaultLayout nếu không có layout
    },
    {
        path: configs.register,
        component : Register,
        layout :  EmptyLayout// Sử dụng DeafaultLayout nếu không có layout
    },
    // {
    //     path: '*',
    //     component : () => <div>404 Not Found</div>,
    // }
];
export default routes;