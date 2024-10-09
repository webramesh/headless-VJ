import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SubscriptionForm from "../../Components/subscription/SubscriptionForm";
import CatAccordion from "../../[category]/Components/CatAccordion";

function layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex gap-5 mt-4 lg:mt-10 ">
        <div className="space-y-4 font-outfit ">
          <div className="container mx-auto px-4 lg:px-0">{children}</div>

          <div className="mx-4 lg:mx-52 lg:-mt-16 z-10">
            <div className="flex flex-col gap-10 bg-white w-full lg:w-auto">
              <SubscriptionForm />
              <CatAccordion />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default layout;
