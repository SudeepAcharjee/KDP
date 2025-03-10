import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

const USStaff = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10">
      <div className="min-h-64 w-full flex items-center justify-center bg-gradient-to-r from-[#CDB9B8] via-[#D4DCD8] to-[#D2CBBF] ">
        <p className="text-[#DE1F3B] text-[2.75rem] md:text-[4rem] font-bold text-center md:text-left leading-[44px]">
          US Staffing
        </p>
      </div>
      <CustomSection className="flex-col items-center pb-12">
        <div className="flex flex-col lg:flex-row justify-between py-10 md:py-20 gap-0">
          <div className="w-full md:min-w-[400px] relative px-2 md:px-0">
            {/* <div className="absolute w-64 md:w-52 h-64 md:h-52 rounded-full right-1/2 md:right-0 top-1/2 transform translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 border-8 border-white shadow-xl md:shadow-none">
              <Image
                src="/images/itstaff.png"
                alt=""
                width={240}
                height={240}
                className="w-full h-auto object-center object-cover"
              />
            </div> */}
            <Image
              src="/images/service2.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[80%_50%]"
            />
          </div>
          <div className="bg-[#DE1F3B] text-white px-6 md:px-16 py-10 flex flex-col  justify-center gap-5 mx-2 md:mx-0">
            <p className="font-bold text-[2.5rem] md:text-[3rem] leading-[44px]">
              US Staffing
            </p>
            <div className="flex flex-col gap-7">
              <p>
                with exceptional service ratings, you can feel confident in our
                partnership. We are a consistent Best of Staffing leader for
                client and talent satisfaction — a dual honor earned by only 1
                percent of staffing firms. Our knowledgeable professionals will
                work closely with you to craft the best solution for your needs,
                whether you’re looking to manage workforce costs, ramp up a new
                team quickly or hire the brightest talent. We specialize in
                placing Engineering, Sciences, Professional and Industrial
                talent in service models that include contract staffing, vendor
                on-premise and Managed Resources. Many employers are hiring and
                on boarding staff successfully — and SherylTech is ready to
                support you.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <p className="font-bold">Recruiting</p>
            <p>
              SherylTech has broad and deep insight across candidate pools, pay
              rates and trends impacting the evolving labor market. You’ll gain
              expert guidance to help you recruit the best-suited candidates for
              your specific situation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Interviewing</p>
            <p>
              Remote recruiting doesn’t rule out a robust interview process. We
              can facilitate video interviews and we’re happy to share best
              practices with you and our candidates so you can focus on what
              matters: hiring qualified talent who will thrive in your culture.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Onboarding</p>
            <p>
              From eligibility screening to preparing a new employee to start
              successfully, you need a flexible but thoughtful process for
              remote on boarding. Our staffing professionals can advise you and
              your contract employee on how to prepare for day 1 success.
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

export default USStaff;
