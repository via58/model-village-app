"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="">
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 text-center">
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white shadow-lg rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg mb-6 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-4 font-medium">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 mt-4 font-medium">
              Failed to send message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
