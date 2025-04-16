import React from 'react';

interface GradientButtonProps {
  text?: string;
  icon?: React.ReactNode;
  href?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text = "Watch Now",
  icon = <span className="text-xl transform rotate-90">→</span>,
  href = "#",
}) => {
  return (
    <a
      href={href}
      className="relative flex items-center justify-center px-6 h-[48px] w-[126px] rounded-[12px] bg-transparent text-white font-light text-[16px] tracking-[-0.32px] group no-underline"
    >
      <span className="absolute inset-0 rounded-[12px] pt-[2px] pb-[2px] px-[1px] bg-[linear-gradient(90deg,#1C76FD_0%,#5721F0_100%)]"></span>
      <span className="relative bg-[#0A0118] w-full h-full rounded-[10px] flex items-center justify-center gap-[10px]">
        {text}
        {icon}
      </span>
    </a>
  );
};

export default GradientButton;
