"use client";

import { usePathname } from "next/navigation";
import { technologies } from "@/data/technologies";
import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

type TechnologyData = {
  title: string;
  description: string;
  image: string;
  expertiseList: string[];
};

const TechPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() as string;

  const techData: TechnologyData | undefined = technologies[slug];

  if (!techData) {
    return (
      <div className="py-24 w-full flex flex-col items-center justify-center gap-y-10">
        <p className="text-[3rem] md:text-6xl text-center font-bold">
          Technology not found!
        </p>
        <p className="underline">Check out our other technologies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {Object.entries(technologies).map(([slug, tech]) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-100 transition"
            >
              <p className="text-lg font-semibold">{tech.title}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const { title, description, image, expertiseList } = techData;

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10">
      <div className="min-h-64 w-full flex items-center justify-center bg-gradient-to-r from-[#CDB9B8] via-[#D4DCD8] to-[#D2CBBF] ">
        <p className="text-[#DE1F3B] text-[2.75rem] md:text-[4rem] font-bold text-center md:text-left leading-[44px]">
          {title}
        </p>
      </div>
      <CustomSection className="flex-col items-center pb-12">
        <div className="flex flex-col lg:flex-row justify-between py-10 md:py-20">
          <div className="w-full md:min-w-[400px] lg:max-w-[500px] relative px-2 md:px-0">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-[#DE1F3B] text-white px-6 md:px-16 py-10 flex flex-col  justify-center gap-5 mx-2 md:mx-0">
            <p className="font-bold text-[2.5rem] md:text-[3rem] leading-[44px]">
              {title}
            </p>
            <div className="flex flex-col gap-7">
              {description.split("\n").map((line, index) => (
                <p key={index}>{line.trim() ? line : <br />}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2">
            <div className="h-[4px] w-[50px] bg-black"></div>
            <p className="font-bold text-[2.75rem] md:text-[3rem]">
              Our Expertise
            </p>
          </div>
          <div className="flex flex-col gap-y-3 mt-4">
            {expertiseList.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <Image src="/icons/check.svg" alt="" width={24} height={24} />
                <p>{item}</p>
              </div>
            ))}
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

export default TechPage;
