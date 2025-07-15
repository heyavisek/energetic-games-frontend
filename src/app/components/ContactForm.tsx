"use client";
import React, { useState } from "react";
import { FromModel } from "../models/global.model";

const ContactForm = () => {
  const [formData, setFormData] = useState<FromModel>({
    fullName: "",
    email: "",
    phone: "",
    isWhatsApp: false,
    dob: "",
    message: "",
  });

  const messageSuccess =
    "Thank you for sharing your information! 🔮<br> Your details have been received. I’ll connect with you shortly to schedule your Tarot reading and guide you through the next steps.<br> <br> ✨ Until then, stay aligned and trust the journey.<br>You can fill out this form only once.<br> <br> Try contacting the owner of the form if you think this is a mistake.";

  const errorMesage = "An error occurred while contacting us.";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [hasError, sethasError] = useState<boolean>(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/get-in-touch", {
        method: "POST",
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          isWhatsApp: formData.isWhatsApp,
          dob: formData.dob,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setResponseMessage(messageSuccess);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          isWhatsApp: false,
          dob: "",
          message: "",
        });
      } else {
        sethasError(true);
        setResponseMessage(errorMesage);
      }
    } catch (error) {
      sethasError(error);
      setResponseMessage(errorMesage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full flex lg:flex-row flex-col-reverse justify-center global-padding gap-8 font-sans">
      <div className="lg:w-1/2 w-full flex flex-col gap-4 z-10">
        {!responseMessage && (
          <form
            onSubmit={handleSubmit}
            className="p-4  rounded-2xl shadow-lg space-y-4 select-none"
          >
            <h2 className="global-card-heading">Get in touch</h2>
            <div>
              <label className="block">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="number"
                maxLength={11}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <label className="inline-flex items-center mt-2 text-sm">
                <input
                  type="checkbox"
                  name="isWhatsApp"
                  checked={formData.isWhatsApp}
                  onChange={handleChange}
                  className="mr-2"
                />
                Same for WhatsApp
              </label>
            </div>
            <div>
              <label className="block">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full min-h-40 border px-3 py-2 rounded"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="custom-button"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
        {responseMessage && (
          <div className="text-start min-h-160 flex flex-col flex-grow-1 gap-6 p-4 bg-white rounded-2xl shadow-lg">
            <h3 className="global-card-heading">
              {hasError
                ? "Submission failed. Please try again."
                : "Your response has been received"}
            </h3>
            <p
              className="global-description"
              dangerouslySetInnerHTML={{ __html: responseMessage }}
            />
          </div>
        )}
      </div>
      <div className=" hidden lg:flex absolute translate-y-2/5 h-1/2 w-full bg-gradient-to-r from-yellow/20 to-white z-0"></div>
    </div>
  );
};

export default ContactForm;
