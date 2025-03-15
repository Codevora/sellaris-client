"use client";

import React, {useState} from "react";

const ContactForm = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
 });

 const handleChange = (e) => {
  const {name, value, type, checked} = e.target;
  setFormData({...formData, [name]: type === "checkbox" ? checked : value});
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.consent) {
   alert("You must agree to send your data for follow-up processing.");
   return;
  }

  const response = await fetch("https://formspree.io/f/xeoerwyj", {
   method: "POST",
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
   },
   body: JSON.stringify(formData),
  });

  if (response.ok) {
   alert("Your message has been sent successfully!");
   setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
   });
  } else {
   alert("There was an error, please try again.");
  }
 };

 return (
  <div className="w-full lg:max-w-md 2xl:max-w-xl ">
   <h2 className="text-2xl font-bold mb-6 text-tertiary">Contact Us</h2>
   <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-4 bg-tertiary/70  backdrop-blur-lg border rounded px-8 pt-6 pb-8 ">
    <div className="mb-4">
     <input
      type="text"
      placeholder="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 2xl:py-4 bg-transparent text-tulang leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <input
      type="email"
      placeholder="Email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 2xl:py-4  bg-transparent text-tulangleading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <input
      type="tel"
      placeholder="Mobile Number"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 2xl:py-4 bg-transparent text-tulang leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <input
      type="text"
      placeholder="Subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 2xl:py-4 bg-transparent text-tulang leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 2xl:h-[180px] bg-transparent text-tulang leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4 flex items-center">
     <input
      type="checkbox"
      name="consent"
      checked={formData.consent}
      onChange={handleChange}
      className="mr-2 leading-tight"
      required
     />
     <label className="text-gray-700 text-sm">
      I agree to send my data for follow-up processing.
     </label>
    </div>
    <div className="flex items-center justify-between">
     <h1 className="text-2xl font-bold text-tulang">
      CODEVORA<span className="text-primary">.</span>ID
     </h1>
     <button
      type="submit"
      className="bg-tulang hover:bg-tulang/60  text-hitam font-bold py-2 px-4 2xl:px-6 rounded focus:outline-none focus:shadow-outline">
      Send
     </button>
    </div>
   </form>
  </div>
 );
};

export default ContactForm;
