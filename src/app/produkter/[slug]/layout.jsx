import ProductInfo from '../Components/ProductInfo';
import Subscription from '../Components/Subscription';

function layout({ children }) {
  return (
    <>
      {children}
      <Subscription />
      <ProductInfo />
    </>
  );
}

export default layout;
