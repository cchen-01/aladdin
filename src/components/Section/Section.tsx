import React from "react";

type SectionProps = {
  children?: React.ReactNode;
  sectionClassName?: string;
  contentClassName?: string;
};

export const Section = ({
  children,
  sectionClassName,
  contentClassName,
}: SectionProps) => (
  <section
    className={`${sectionClassName} px-[20px] pt-[8px] pb-[8px] tablet:px-8 tablet:pt-[28px] tablet:pb-[28px] smLaptop:px-[190px] smLaptop:pt-[28px] smLaptop:pb-[28px] lglaptop:px-[190px] lglaptop:pt-[28px] lglaptop:pb-[28px]`}
  >
    <div className={`${contentClassName} max-w-[1540px] mx-auto`}>
      {children}
    </div>
  </section>
);
