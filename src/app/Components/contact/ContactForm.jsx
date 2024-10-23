import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>

          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-gray-900 outline-none text-sm focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" border border-gray-300 text-gray-900 outline-none text-sm focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
            placeholder="john@gmail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className=" border border-gray-300 text-gray-900 outline-none text-sm focus:ring-gray-500 focus:border-gray-500 rounded-lg  block w-full p-2.5"
            placeholder="Write your thoughts here..."
          ></textarea>
          <button
            type="button"
            className="focus:outline-none text-white w-full mt-5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
