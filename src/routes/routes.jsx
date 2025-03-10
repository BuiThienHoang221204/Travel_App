import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import configs from "../config";
import EmptyLayout from "../Layout/EmtyLayout";
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";

const routes = [
    {
        path: configs.home,
        component: Home,
    },

    {
        path: configs.about,
        component: About,
    },
    {
        path: configs.contact,
        component: Contact,
    },
    {
        path: configs.login,
        component: Login,
        layout: EmptyLayout// Sử dụng DeafaultLayout nếu không có layout
    },
    {
        path: configs.register,
        component: Register,
        layout: EmptyLayout// Sử dụng DeafaultLayout nếu không có layout
    },
    {
        path: configs.emptylayout,
        component: () => (
            <div className="h-60 text-center align-content-center relative" style={{fontFamily:'sans-serif'}}>
                <h1 className="text-4xl font-bold" >404 Không tìm thấy trang</h1>
                <p className="opacity-65 mb-10 mt-3">Xin lỗi chúng tôi không thể tìm thấy trang này</p>
                <Link className="text-2xl py-3 text-decoration-none text-black" to={configs.home}>Quay về trang chủ </Link>
                <IoIosReturnLeft className="absolute" style={{top:'66%', fontSize:'40px', right:'37%'}}/>
            </div>
        )
    }
];
export default routes;