import React from 'react';

const Contact = () => {
  return (
    <div className="m-16 p-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">
        For inquiries, please email us at <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a>.
      </p>
      <p className="text-gray-700 mt-4">
        You can also reach us through our social media channels.
      </p>
    </div>
  );
}

export default Contact;
