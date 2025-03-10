import { useState } from "react";

const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value); 
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Your message has been sent successfully! Please check your mail to review your message");
        setErrorMessage(null);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setErrorMessage("There was an error in sending your message. Please try again.");
        setSuccessMessage(null);
      }
    } catch {
      setErrorMessage("There was an error in sending your message. Please try again.");
      setSuccessMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    successMessage,
    errorMessage,
    handleInputChange,
    handleSubmit,
  };
};

export default useContactForm;
