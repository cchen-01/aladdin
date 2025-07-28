"use client";
import * as React from "react";
import { Section } from "@/components/Section/Section";
import { Bodylmd } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";
import Image from "next/image";
import Button from "@/components/Button/Button";

function Item({
  title,
  desc,
  url,
}: {
  title: string;
  desc: string;
  url: string;
}) {
  return (
    <div className="flex items-start flex-col">
      <Image
        src={url}
        alt=""
        width={32}
        height={32}
        className="min-w-[20px] mb-4 md:mb-5"
      />
      <SGHeader className="mb-2 md:mb-5 text-[16px] md:text-[24px]">
        {title}
      </SGHeader>
      <Bodylmd className="text-[#647c87]">{desc}</Bodylmd>
    </div>
  );
}

const items = [
  {
    title: "Sunlight Exposure",
    imageUrl: "/svg/solar.svg",
    paragraph:
      "Maximize daily sun by minimizing obstructions like trees or buildings.",
  },
  {
    title: "Roof Orientation",
    imageUrl: "/svg/house.svg",
    paragraph:
      "South-facing in the northern hemisphere ensures optimal output.",
  },
  {
    title: "Structural Integrity",
    imageUrl: "/svg/folder.svg",
    paragraph: "Ensure roofs or ground areas can support your system.",
  },
  {
    title: "Climate",
    imageUrl: "/svg/rain.svg",
    paragraph:
      "Favorable regions with more sun and fewer overcast days improve efficiency.",
  },
  {
    title: "Permits & Compliance",
    imageUrl: "/svg/folder.svg",
    paragraph:
      "Our team ensures your project meets all local code and permit requirements.",
  },
];

function GreyPanel({ imageUrl }) {
  return (
    <div className="lg:bg-[#f4f4f6]">
      <Section
        sectionClassName="!pt-12 !pb-12 smLaptop:!pt-16 smLaptop:!pb-32 lglaptop:!pt-16 lglaptop:!pb-32"
        contentClassName="flex flex-col gap-10 md:gap-16"
      >
        {/* Header Section */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between">
          <SGHeader className="mb-5 sm:mb-0 text-[24px] md:text-[48px]">
            What Makes a Site Ideal for Solar?
          </SGHeader>
          <div className="flex">
            <Button
              onClick={() => {
                window.location.href = "/contact";
              }}
              white={false}
              className="sm:self-auto w-auto self-start"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Main Content Row */}
        <div className="w-full flex flex-col md:flex-row gap-11 md:gap-16 items-stretch">
          {/* Left Side: Image */}
          <div className="w-full md:w-[42%] h-full flex flex-col gap-6">
            <div className="aspect-square rounded-xl overflow-hidden w-full relative">
              <Image
                src={imageUrl}
                alt="Ideal Site for Solar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Items Grid */}
          <div className="w-full md:w-[57%] h-full flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6 md:gap-y-10">
              {items.map((item, index) => (
                <Item
                  key={index}
                  title={item.title}
                  desc={item.paragraph}
                  url={item.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default GreyPanel;
