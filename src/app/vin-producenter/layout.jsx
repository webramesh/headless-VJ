import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import SubscriptionForm from "../Components/subscription/SubscriptionForm";
import CatAccordion from "../[category]/Components/CatAccordion";

function layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="md:w-2/3 ">
          {children}
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            <CatAccordion />
          </div>
        </div>

        <div className="w-1/3 hidden md:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default layout;
