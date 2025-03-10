import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

const SoftwareDevelopment = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10">
      <div className="min-h-64 w-full flex items-center justify-center bg-gradient-to-r from-[#CDB9B8] via-[#D4DCD8] to-[#D2CBBF]">
        <p className="text-[#DE1F3B] text-[2.75rem] md:text-[4rem] font-bold text-center md:text-left leading-[44px]">
          Software Development
        </p>
      </div>
      <CustomSection className="flex-col items-center gap-4 pb-12">
        <div className="flex flex-col lg:flex-row justify-between py-20">
          <div className="w-full md:min-w-[400px] relative px-2 md:px-0">
            <Image
              src="/images/service1.png"
              alt="Software Development"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-[#DE1F3B] text-white px-6 md:px-16 py-10 flex flex-col justify-center gap-5 mx-2 md:mx-0">
            <p className="font-bold text-[2.5rem] md:text-[3rem] leading-[44px]">
              Software Development
            </p>
            <div className="flex flex-col gap-7">
              <p>
                In the ever-changing tech landscape, staying competitive demands
                innovation and adaptability. Sheryltech&apos;s Software
                Development services enable businesses to leverage cutting-edge
                technology to achieve their goals.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[1.75rem]">
              Why Choose Software Development with SherylTech?
            </p>
            <div className="ml-8">
              <ol className="list-decimal space-y-3">
                <li>
                  <span className="font-bold">Custom Solutions: </span>
                  Tailored software solutions to meet your unique business
                  needs.
                </li>
                <li>
                  <span className="font-bold">Agile Approach: </span>
                  Flexible and iterative development processes ensuring rapid
                  delivery.
                </li>
                <li>
                  <span className="font-bold">Cutting-Edge Technologies: </span>
                  Expertise in modern technologies like React, Node.js, Python,
                  and more.
                </li>
                <li>
                  <span className="font-bold">Quality Assurance: </span>
                  Rigorous testing to deliver robust and reliable software.
                </li>
                <li>
                  <span className="font-bold">Scalable Architecture: </span>
                  Design and build solutions that grow with your business.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[1.75rem]">Our Core Competencies</p>
            <div className="ml-8">
              <ul className="list-decimal space-y-3">
                <li>
                  <span className="font-bold">Web Development: </span>
                  Build responsive and user-friendly web applications.
                </li>
                <li>
                  <span className="font-bold">Mobile App Development: </span>
                  Create seamless mobile experiences for iOS and Android.
                </li>
                <li>
                  <span className="font-bold">Cloud Integration: </span>
                  Enable scalability and efficiency with cloud technologies.
                </li>
                <li>
                  <span className="font-bold">API Development: </span>
                  Design and implement robust APIs for seamless integrations.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <p className="italic">And More…</p>
          <p>
            Ready to transform your ideas into reality? Connect with us today to
            explore how Sheryltech’s Software Development services can
            accelerate your growth.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="font-bold text-[1.75rem]">Technologies we Use</p>
          <div className="ml-8">
            <ul className="list-decimal space-y-1">
              {[
                { name: "JAVA", path: "/services/java" },
                {
                  name: "Python",
                  path: "/services/python",
                },
                {
                  name: "RPA",
                  path: "/services/rpa",
                },
                { name: "Machine Learning", path: "/services/machine-learning" },
                { name: "Cyber Security", path: "/services/cyber-security" },
                { name: "Cloud Computing", path: "/services/cloud-computing" },
                { name: "Sales Force", path: "/services/sales-force" },
                { name: "Mule Soft", path: "/services/mule-soft" },
                { name: "Blockchain", path: "/services/blockchain" },
                { name: ".NET", path: "/services/dot-net" },
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

        <div className="w-full mt-10 flex flex-col items-center gap-4">
          <div className="w-full flex items-center justify-center mt-8">
            <p className="font-bold text-[1.25rem]">
              Discover the future of software development with Sheryltech – your
              trusted technology partner.
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

export default SoftwareDevelopment;
