"use client";

import { usePathname } from "next/navigation";
import useContactForm from "@/hooks/useContactForm";
import { useState } from "react";

const Form = () => {
  const {
    formData,
    loading,
    successMessage,
    errorMessage,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  const pathname = usePathname();

  const isContact = pathname === "/contact";
  const [sendBrochure, setSendBrochure] = useState(true);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/SheryltTure.pdf";
    link.download = "SheryltTece.pdf";
    link.click();
  };

  const handleSubmitWithPDF = async (e: React.FormEvent) => {
    await handleSubmit(e);

    if (sendBrochure) {
      downloadPDF();
    }
  };

  return (
    <div
      className={`${
        isContact ? "text-black" : "text-black"
      } min-w-[300px] max-w-[500px] py-6`}
    >
      <form onSubmit={handleSubmitWithPDF} className="flex flex-col space-y-6">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col gap-3">
            <label aria-label="Name">First Name</label>
            <input
              required
              aria-label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="text-black border border-black rounded-[30px] p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label aria-label="Name">Last Name</label>
            <input
              required
              aria-label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="text-black border border-black rounded-[30px] p-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label aria-label="email">Mail</label>
          <input
            required
            aria-label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="text-black border border-black rounded-[30px] p-2"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label aria-label="phone">Phone No.</label>
          <input
            required
            aria-label="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="text-black border border-black rounded-[30px] p-2"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label aria-label="Message">Message</label>
          <textarea
            required
            aria-label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="text-black border border-black rounded-[30px] p-2 min-h-[100px]"
          />
        </div>
        <div className="flex items-center gap-2 text-black">
          <input
            type="checkbox"
            checked={sendBrochure}
            onChange={(e) => setSendBrochure(e.target.checked)}
          />
          <p className="text-sm">Send me a Brochure</p>
          <p>|</p>
          <div
            onClick={downloadPDF}
            className="text-sm text-slate-400 underline cursor-pointer"
          >
            Download brochure
          </div>
        </div>
        <button disabled={loading}>
          <div
            className={`${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : isContact
                ? "hover:bg-[#5F4B8B] bg-white hover:text-white text-black"
                : "hover:bg-[#5F4B8B] bg-slate-800 text-white"
            } px-4 py-2 rounded-[33px] w-fit transition-all duration-300`}
          >
            {loading ? "Submitting..." : "Make An Appointment"}
          </div>
        </button>
        {successMessage && (
          <div className="text-green-500 mt-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Form;
