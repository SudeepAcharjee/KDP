import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  const items = [{ title: "Zeron", image: "/images/logo.png" }];

  return (
    <div className="w-full flex flex-col items-center gap-3 overflow-hidden py-8">
      <p className={`text-[1.5rem]`}>Trusted by</p>

      <Marquee autoFill={true} speed={30}>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-10 shrink-0 whitespace-nowrap"
          >
            <Image src={item.image} alt={item.title} width={300} height={100} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;