import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import ProductInfo from '../Components/ProductInfo';
import Subscription from '../Components/Subscription';

function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Subscription />
            <ProductInfo />
            <Footer />
        </>
    );
}

export default layout;
