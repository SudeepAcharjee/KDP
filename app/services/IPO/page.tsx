import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

const USInsurance = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10">
      <div className="min-h-64 w-full flex items-center justify-center bg-gradient-to-r from-[#CDB9B8] via-[#D4DCD8] to-[#D2CBBF] ">
        <p className="text-[#DE1F3B] text-[2.75rem] md:text-[4rem] font-bold text-center md:text-left leading-[44px]">
          IPO Services
        </p>
      </div>
      <CustomSection className="flex-col items-center gap-4 pb-12">
        <div className="flex flex-col lg:flex-row justify-between py-20">
          <div className="w-full md:min-w-[400px] relative px-2 md:px-0">
            {/* <div className="absolute w-64 md:w-52 h-64 md:h-52 rounded-full right-1/2 md:right-0 top-1/2 transform translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 border-8 border-white shadow-xl md:shadow-none">
              <Image
                src="/images/insurance.png"
                alt=""
                width={240}
                height={240}
                className="w-full h-auto object-center object-cover"
              />
            </div> */}
            <Image
              src="/images/service3.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-[#DE1F3B] text-white px-6 md:px-16 py-10 flex flex-col  justify-center gap-5 mx-2 md:mx-0">
            <p className="font-bold text-[2.5rem] md:text-[3rem] leading-[44px]">
              IPO Services
            </p>
            <div className="flex flex-col gap-7">
              <p>
                In today&apos;s rapidly evolving insurance landscape, staying
                competitive requires a keen focus on core competencies and the
                ability to adapt swiftly. Sheryltech offers a dynamic solution
                through Insurance Process Outsourcing (IPO) that empowers
                insurance companies, agencies, and brokers to excel by
                entrusting non-core functions to us.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          {/* Why Choose IPO Section */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[1.75rem]">
              Why Choose IPO with SherylTech?
            </p>
            <div className="ml-8">
              <ol className="list-decimal space-y-3">
                <li>
                  <span className="font-bold">Cost Efficiency: </span>
                  Reduce operational costs without compromising on quality. Our
                  cost-effective solutions ensure optimal resource utilization.
                </li>
                <li>
                  <span className="font-bold">Scalability: </span>
                  Adapt effortlessly to fluctuating demands. Scale up or down as
                  needed, ensuring agility in a dynamic industry.
                </li>
                <li>
                  <span className="font-bold">Expertise and Technology: </span>
                  Leverage our specialized skills and advanced technology.
                  Benefit from best practices and stay ahead of the curve.
                </li>
                <li>
                  <span className="font-bold">Risk Management: </span>
                  Navigate complex regulatory and compliance landscapes with
                  confidence. We help you mitigate risks and maintain
                  compliance.
                </li>
                <li>
                  <span className="font-bold">Customer Satisfaction: </span>
                  Enhance the customer experience through efficient back-office
                  support. Delight your customers with seamless interactions.
                </li>
              </ol>
            </div>
          </div>

          {/* Core Competencies Section */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[1.75rem]">Our Core Competencies</p>
            <div className="ml-8">
              <ul className="list-decimal space-y-3">
                <li>
                  <span className="font-bold">New Account Management: </span>
                  Streamline onboarding and account setup, improving efficiency
                  and client satisfaction.
                </li>
                <li>
                  <span className="font-bold">Cyber Insurance: </span>
                  Stay ahead in the digital age by offering robust cyber
                  insurance solutions to your clients.
                </li>
                <li>
                  <span className="font-bold">Claims Processing: </span>
                  Expedite claims processing, ensuring timely payouts and client
                  trust.
                </li>
                <li>
                  <span className="font-bold">Underwriting Support: </span>
                  Access expert underwriting support to make informed decisions
                  and reduce risk.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <p className="italic">And More…</p>
          <p>
            Ready to elevate your insurance business to new heights? Connect
            with us today to explore how Sheryltech’s Insurance Process
            Outsourcing services can help you thrive.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="font-bold text-[1.75rem]">IPO Services we Offer</p>
          <div className="ml-8">
            <ul className="list-decimal space-y-1">
              {[
                { name: "Certificates of Insurance", path: "/services/certificate-of-insurance" },
                { name: "Direct Bill Reconciliation", path: "/services/Direct-Bill-Reconciliation" },
                { name: "Policy Cancellations", path: "/services/policyCancellations" },
                { name: "Endorsements", path: "/services/endorsements" },
                { name: "Loss Runs & MVR's", path: "/services/lossRunsAndMVRs" },
                { name: "Policy Checking", path: "/services/policyChecking" },
                { name: "Accounting & Bookkeeping Services", path: "/services/accountingAndBookkeeping" },
                { name: "Quoting & Submissions", path: "/services/quotingAndSubmissions" },
                { name: "Agency Invoicing", path: "/services/agencyInvoicing" },
                { name: "Policy Administration", path: "/services/policyAdministration" },
              ].map((tech) => (
                <li key={tech.name}>
                  <Link href={tech.path}>
                    <span className="font-bold hover:underline">
                      {tech.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-4 mt-10">
          <div className="w-full flex items-center justify-center mt-8">
            <p className="font-bold text-[1.25rem]">
              Discover the power of IPO with Sheryltech – your strategic partner
              in insurance excellence.
            </p>
          </div>
          <Link href="/contact">
            <div className="bg-[#ffffff4b] border border-slate-600 px-4 py-2 rounded-[33px] w-fit cursor-pointer hover:underline">
              Contact us now
            </div>
          </Link>
        </div>
      </CustomSection>
    </div>
  );
};

export default USInsurance;
