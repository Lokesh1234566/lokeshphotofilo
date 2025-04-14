import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true); // start loading

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // toast.success("Message sent successfully!");
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className={`${
              loading ? "bg-yellow-300" : "bg-yellow-500 hover:bg-yellow-600"
            } text-white px-6 py-3 rounded-full transition duration-300`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Email:</strong> rlokesh1233@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 8618349784
          </p>
          <p>
            <strong>Location:</strong> Bengaluru, India
          </p>
          <p>
            I'm open to freelance work, collaborations, or full-time roles. Feel
            free to reach out and let’s connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
