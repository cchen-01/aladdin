"use client";
import { useState } from "react";
import { Bodylsb } from "@coolsday/polaron-design-system";
import React from "react";

export default function Form({ setSubmissionSuccess }) {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" }); // clear error while typing
  };

  const validateForm = () => {
    const errors = {};
    if (!form.firstName) errors.firstName = "First name is required";
    if (!form.lastName) errors.lastName = "Last name is required";
    if (!form.email) errors.email = "Email is required";
    if (!form.phone) errors.phone = "Phone number is required";
    if (!form.message) errors.message = "Message is required";
    else if (form.message.length < 10)
      errors.message = "Message must be at least 10 characters long";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(false);

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sheetId: "Sheet1" }),
      });
      if (!response.ok) throw new Error("Network error");
      setSubmissionSuccess(true);
      // redirect or show success message here
    } catch (error) {
      console.error("Detailed error:", error);
      res.status(500).json({
        message: "Failed to submit form",
        error: error.message,
        stack: error.stack,
      });
      setSubmissionError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
      {/* First & Last Name */}
      <div className="flex space-x-3">
        <div className="flex flex-col w-1/2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className={`p-3 rounded bg-[#80a29c] text-white placeholder-white focus:outline-none ${
              formErrors.firstName ? "border border-red-500" : ""
            }`}
          />
          {formErrors.firstName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col w-1/2">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className={`p-3 rounded bg-[#80a29c] text-white placeholder-white focus:outline-none ${
              formErrors.lastName ? "border border-red-500" : ""
            }`}
          />
          {formErrors.lastName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className={`p-3 rounded bg-[#80a29c] text-white placeholder-white focus:outline-none ${
            formErrors.email ? "border border-red-500" : ""
          }`}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className={`p-3 rounded bg-[#80a29c] text-white placeholder-white focus:outline-none ${
            formErrors.phone ? "border border-red-500" : ""
          }`}
        />
        {formErrors.phone && (
          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <textarea
          name="message"
          placeholder="How Can We Help?"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`p-3 rounded bg-[#80a29c] text-white placeholder-white focus:outline-none ${
            formErrors.message ? "border border-red-500" : ""
          }`}
        />
        {formErrors.message && (
          <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="border bg-transparent px-6 py-4 rounded-full transition border-white flex items-center justify-center disabled:opacity-50"
      >
        <Bodylsb className="text-white font-inter">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Bodylsb>
      </button>

      {submissionError && (
        <p className="text-red-500 text-center mt-2">
          Submission failed. Try again.
        </p>
      )}
    </form>
  );
}
