import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-6xl my-10 font-outfit shadow-lg px-4 py-4 rounded-lg">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <h2 className="text-2xl font-bold my-4">katalonien-undersokning</h2>
            <p>E-Label Draft to be exported later on to new domain.</p>
            <p className="my-4">
              Form fields to fill out{" "}
              <span className="text-red-500 italic">(Obligatoriskt)</span>
            </p>
            {/* radio start */}
            <div>
              <div className="flex items-center mb-1">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Required info in accordance to EU Law
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Required info in accordance to EU Law + Italian Package
                  regulation
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  All fields
                </label>
              </div>
            </div>
            {/* end of radio */}

            <hr className="h-px my-8 bg-gray-200 border-0 " />
          </div>
          <div className="col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
