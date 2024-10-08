import Footer from "../../Components/Footer";
import Map from "../../Components/Map";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import SubscriptionForm from "../../Components/subscription/SubscriptionForm";
import CatAccordion from "../../[category]/Components/CatAccordion";

function layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex gap-5 mt-10">
        <div className="space-y-4 md:w-2/3 font-outfit ">
          {children}
          <SubscriptionForm />
          <CatAccordion />
        </div>
        <div className="w-[30%] hidden md:block">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default layout;
