'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: 'Email sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus({ success: false, message: result.error || 'Failed to send email.' });
      }

      // Clear status message after 2 seconds
      setTimeout(() => {
        setStatus(null);
      }, 2000);
    } catch (error) {
      setStatus({ success: false, message: 'An error occurred. Please try again later.' });

      // Clear status message after 2 seconds
      setTimeout(() => {
        setStatus(null);
      }, 2000);
    }
  };

  return (
    <div>
      {status && (
        <div
          className={`my-8 p-4 text-sm rounded-lg ${
            status.success ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
          }`}
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 text-gray-900 outline-none text-sm focus:ring-gray-500 focus:border-gray-500 rounded-lg block w-full p-2.5"
            placeholder="John"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 text-gray-900 outline-none text-sm focus:ring-gray-500 focus:border-gray-500 rounded-lg block w-full p-2.5"
            placeholder="john@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="border border-gray-300 text-gray-900 outline-none text-sm focus:ring-gray-500 focus:border-gray-500 rounded-lg block w-full p-2.5"
            placeholder="Write your thoughts here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="focus:outline-none text-white w-full mt-5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
