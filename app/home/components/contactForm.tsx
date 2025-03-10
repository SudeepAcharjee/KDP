import CustomSection from "@/components/Layout/CustomSection";
import Form from "@/components/Modal/Form";

const ContactForm = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contactbg.png')" }}
    >
      <CustomSection className="flex-col md:flex-row justify-between gap bg-opacity-90 p-6 rounded-md shadow-md ">
        <div className="w-full max-w-1/3">
          <p className="text-[1.5rem] max-w-[200px] leading-[24px] text-white">
            Connect With Us
          </p>
        </div>
        <div className="w-full flex items-start md:items-center justify-start md:justify-center">
          <Form />
        </div>
      </CustomSection>
    </div>
  );
};

export default ContactForm;
