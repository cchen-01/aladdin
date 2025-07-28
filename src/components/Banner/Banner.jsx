"use client";
import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { Section } from "../Section/Section";
import { Bodyxlmd } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";

function Banner({
  title,
  description,
  url,
  imageUrl,
  buttontext,
  bgc,
  isAboutPage,
}) {
  return (
    <div
      className={`relative ${bgc} w-full bg-cover bg-center bg-no-repeat z-0 rounded-b-[48px]`}
    >
      <Section
        sectionClassName="!pt-[150px] !pb-[150px] tablet:!pt-[150px] tablet:!pb-[150px] smLaptop:!pt-[237px] smLaptop:!pb-[237px] lglaptop:!pt-[237px] lglaptop:!pb-[237px]"
        contentClassName={`flex flex-col md:flex-row ${
          isAboutPage ? "md:flex-row-reverse" : ""
        } items-center justify-between gap-12`}
      >
        {/* Left side: Text content — should appear first on all screens */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2">
          <SGHeader className="mb-8 md:mb-16 text-white  text-[28px] md:text-[62px]">
            {title}
          </SGHeader>
          <Bodyxlmd className="text-white mb-8 md:mb-16 font-inter">
            {description}
          </Bodyxlmd>
          {!isAboutPage && (
            <Button
              onClick={() => {
                window.location.href = url;
              }}
              white={true}
            >
              {buttontext}
            </Button>
          )}
        </div>

        {/* Right side: Image — second in all screen sizes */}
        <div className="relative w-full h-auto md:w-[740px] md:h-[430px]">
          <Image
            src={imageUrl}
            width={740}
            height={430}
            alt="Solar Experts"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </Section>
    </div>
  );
}

export default Banner;
