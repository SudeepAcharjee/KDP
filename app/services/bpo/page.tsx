import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

const BPO = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10">
      <div className="min-h-64 w-full flex items-center justify-center bg-gradient-to-r from-[#CDB9B8] via-[#D4DCD8] to-[#D2CBBF] ">
        <p className="text-[#DE1F3B] text-[2.75rem] md:text-[4rem] font-bold text-center md:text-left leading-[44px]">
          BPO Services
        </p>
      </div>
      <CustomSection className="flex-col items-center pb-12">
        <div className="flex flex-col lg:flex-row justify-between py-10 md:py-20">
          <div className="w-full md:min-w-[400px] relative px-2 md:px-0">
            {/* <div className="absolute w-64 md:w-52 h-64 md:h-52 rounded-full right-1/2 md:right-0 top-1/2 transform translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 border-8 border-white shadow-xl md:shadow-none overflow-hidden">
              <Image
                src="/images/bpo.png"
                alt=""
                width={240}
                height={240}
                className="w-full h-auto object-center object-cover"
              />
            </div> */}
            <Image
              src="/images/service4.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[10%_50%]"
            />
          </div>
          <div className="bg-[#DE1F3B] text-white px-6 md:px-16 py-10 flex flex-col  justify-center gap-5 mx-2 md:mx-0">
            <p className="font-bold text-[2.5rem] md:text-[3rem] leading-[44px]">
              BPO
            </p>
            <div className="flex flex-col gap-7">
              <p>
                At SherylTech, our BPO solutions redefine how businesses manage
                back-office and operational tasks. With expert professionals,
                cutting-edge technology, and proven methodologies, we streamline
                workflows, boost efficiency, and deliver outstanding results.
              </p>
              <p>
                Our services span customer support, data management, claims
                processing, and compliance, backed by robust performance
                tracking. By reducing costs, minimizing errors, and enhancing
                scalability, we enable you to focus on core operations while we
                handle the rest—delivering measurable value and quality.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pb-4">
          <p>The benefits of Business Process Outsourcing are</p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-bold">Cost Reduction: </p>
            <p>
              Significantly lower operational expenses by streamlining workflows
              and reducing resource overheads, delivering long-term cost
              efficiencies.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Faster Turnaround Times: </p>
            <p>
              Minimize processing delays and improve responsiveness, ensuring
              timely completion of tasks and better customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Centralized Vendor Management: </p>
            <p>
              Simplify operations by consolidating multiple vendors into a
              unified, tailored service panel, driving efficiency and cost
              savings.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Access to Specialized Skills: </p>
            <p>
              Tap into a global talent pool with niche expertise to handle
              complex tasks with precision and efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Enhanced Quality Assurance: </p>
            <p>
              Implement robust quality checks and process optimizations that
              ensure consistency, accuracy, and high service levels across all
              functions.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Scalability and Flexibility: </p>
            <p>
              Quickly scale your operations up or down based on business needs,
              ensuring adaptability in a dynamic market environment.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Data-Driven Insights: </p>
            <p>
              Leverage detailed reporting and analytics for process improvement,
              workforce planning, and informed decision-making.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Regulatory Compliance: </p>
            <p>
              Stay ahead in navigating complex compliance landscapes with a
              dedicated focus on ensuring adherence to industry regulations and
              standards.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Increased Focus on Core Operations: </p>
            <p>
              By outsourcing non-core functions, your business can concentrate
              resources and efforts on strategic growth and innovation.
            </p>
          </div>
        </div>

        <div className="mt-10">
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

export default BPO;
