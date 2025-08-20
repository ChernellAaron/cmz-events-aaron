"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      // Using your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mvgazddv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // You can add additional fields here
          _subject: `New Contact from ${formData.name} ${formData.surname}`,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", surname: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-600 mb-2 text-center">Contact Us</h2>
      <p className="text-center text-gray-500 mb-6">
        Get in touch with us for your next event. We&apos;re here to help make it unforgettable!
      </p>

      {status === "success" && (
        <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-md">
          Thank you for your message. We will get back to you soon!
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md">
          There was an error submitting your message. Please try again.
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="surname" className="block text-gray-700 font-semibold mb-2">
          Surname
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your surname"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message"
          rows={4}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
