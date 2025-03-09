import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import '../DefaultLayout/DefaultLayout.css';
import { SlideShow } from '../../pages/component';

function DeafaultLayout({ children }) {
    return (
        <div className="container-fluid">
            <Header />
            <SlideShow />
            <div className="body-container">{children}</div>
            <Footer />
        </div>
    )
}
export default DeafaultLayout;