import Home from "../pages/Home/Home"; 
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import configs from "../config";

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
        // layout : null, // Sử dụng DeafaultLayout nếu không có layout
    },
    // {
    //     path: '*',
    //     component : () => <div>404 Not Found</div>,
    // }
];
export default routes;