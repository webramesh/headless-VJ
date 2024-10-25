import React from 'react';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Navbar from '../Components/Navbar.jsx';
import RegionalCardItem from '../Components/regionalCard/RegionalCardItem.jsx';
import Map from '../Components/Map.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import CatAccordion from '../[category]/Components/CatAccordion.jsx';

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto md:max-w-6xl mt-5">
        <h3 className="mb-5">Breadcrump</h3>
        <div className="block md:grid md:grid-cols-3   md:gap-8">
          <div className=" w-full col-span-2">
            <div className="h-[50vh] mx-4 md:mx-auto">
              <Map />
            </div>

            <div className="  w-full mx-4 md:mx-auto mt-5 block md:grid md:grid-cols-3  gap-4 ">
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
              <RegionalCardItem />
            </div>

            <div className="mt-8 mx-4 md:mx-auto">
              <SubscriptionForm />
            </div>

            <div className="mt-8 mx-4 md:mx-auto">
              <CatAccordion />
            </div>
          </div>
          <div className="block md:col-span-1 w-full">
            <div className="hidden md:block sticky top-0">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className=" md:hidden mx-4 md:mx-auto">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default page;
