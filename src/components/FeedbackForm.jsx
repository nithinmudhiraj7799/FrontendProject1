// src/components/FeedbackForm.jsx
import React, { useState } from "react";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.message) {
    setStatus("Please fill in all fields.");
    return;
  }
  try {
    const response = await fetch("https://tech-tomorrow-page-2.onrender.com/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (response.ok) {
      setStatus("Feedback submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus(data.message || "Error submitting feedback.");
    }
  } catch (error) {
    setStatus("Something went wrong. Please try again later.");
  }
};

  return (
    <section className="bg-gray-800 text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">We value your feedback</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 max-w-xl mx-auto"
      >
        <input
          className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black py-2 px-6 rounded hover:bg-gray-300"
        >
          Submit
        </button>
        {status && <p className="mt-2 text-sm">{status}</p>}
      </form>
    </section>
  );
};

export default FeedbackForm;