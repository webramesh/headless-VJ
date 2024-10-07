import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import CatAccordion from "../../[category]/Components/CatAccordion";
import SenasteNytt from "../../Components/SenasteNytt";
import SubscriptionForm from "../../Components/subscription/SubscriptionForm";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <div className="container mx-auto my-2 lg:my-10 p-2 md:flex gap-5">
        <div className="md:w-2/3">
          <SubscriptionForm />
        </div>
        <div className="md:w-1/3">
          <SenasteNytt />
        </div>
      </div>
      <CatAccordion />
      <Footer />
    </>
  );
}
