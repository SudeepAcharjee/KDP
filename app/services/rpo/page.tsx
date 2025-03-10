import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

const RPO = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10">
      <div className="min-h-64 w-full flex items-center justify-center bg-gradient-to-r from-[#CDB9B8] via-[#D4DCD8] to-[#D2CBBF] ">
        <p className="text-[#DE1F3B] text-[2.75rem] md:text-[4rem] font-bold text-center md:text-left leading-[44px]">
          RPO Services
        </p>
      </div>
      <CustomSection className="flex-col items-center pb-12">
        <div className="flex flex-col lg:flex-row justify-between py-10 md:py-20">
          <div className="w-full md:min-w-[400px] relative px-2 md:px-0">
            <Image
              src="/images/RPO.jpg"
              alt="RPO Service"
              width={500}
              height={500}
              className="w-full h-full object-cover object-[10%_50%]"
            />
          </div>
          <div className="bg-[#DE1F3B] text-white px-6 md:px-16 py-10 flex flex-col justify-center gap-5 mx-2 md:mx-0">
            <p className="font-bold text-[2.5rem] md:text-[3rem] leading-[44px]">
              RPO
            </p>
            <div className="flex flex-col gap-7">
              <p>
                At SherylTech, our Recruitment Process Outsourcing (RPO)
                solutions are designed to transform how organizations acquire
                top talent. Leveraging industry expertise, advanced technology,
                and a scalable framework, we deliver comprehensive hiring
                solutions tailored to your unique needs.
              </p>
              <p>
                From sourcing and screening to onboarding, we ensure a seamless
                recruitment experience. Our strategies align with your business
                goals to help you build a robust, skilled workforce while
                reducing hiring timelines and operational costs.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pb-4">
          <p>The benefits of Recruitment Process Outsourcing are</p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-bold">Access to Top Talent: </p>
            <p>
              Gain access to a global pool of highly skilled professionals,
              ensuring your organization attracts the best candidates for
              critical roles.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Scalable Solutions: </p>
            <p>
              Easily adjust recruitment efforts to meet evolving business
              demands, whether scaling up for growth or streamlining during
              transitions.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Enhanced Candidate Experience: </p>
            <p>
              Provide a professional, engaging recruitment process that leaves
              a lasting positive impression on candidates.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Cost Efficiency: </p>
            <p>
              Reduce recruitment expenses through streamlined processes,
              optimized resource allocation, and minimized hiring mistakes.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Advanced Technology Integration: </p>
            <p>
              Leverage AI-driven tools and data analytics to enhance decision-making and improve recruitment outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Compliance and Risk Management: </p>
            <p>
              Ensure adherence to local and global labor laws, reducing legal
              and compliance risks in the hiring process.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Faster Time-to-Hire: </p>
            <p>
              Accelerate recruitment cycles, enabling you to quickly fill
              critical positions and maintain business momentum.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Strategic Workforce Planning: </p>
            <p>
              Align recruitment efforts with long-term business strategies to
              ensure sustainable growth and talent acquisition.
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

export default RPO;
