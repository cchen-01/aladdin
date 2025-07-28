"use client";
import * as React from "react";
import { Section } from "../Section/Section";
import { Bodyxlmd, Bodylmd } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";

function GreenPanel({ title, description, items = [] }) {
  return (
    <Section
      contentClassName="bg-[#F2F6F5] py-[32px] px-[16px] md:py-[64px] md:px-[48px] rounded-[32px]"
      sectionClassName="!pt-12 !pb-12 smLaptop:!pt-16 smLaptop:!pb-32 lglaptop:!pt-16 lglaptop:!pb-32"
    >
      <div className="text-left mb-8 md:mb-20">
        <SGHeader className="mb-6 text-[24px] md:text-[48px]">{title}</SGHeader>
        <Bodyxlmd className="text-[#647c87] max-w-5xl mx-auto md:mx-0">
          {description}
        </Bodyxlmd>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-${
          items.length < 3 ? items.length : 3
        } gap-12`}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <img
              src={item.imageUrl}
              alt="Expert Support Icon"
              className="w-8 h-8 md:w-12 md:h-12"
            />

            <div>
              <SGHeader className="mb-3 md:mb-5 text-[16px] md:text-[24px]">
                {item.title}
              </SGHeader>
              <Bodylmd className="text-[#647c87]">{item.paragraph}</Bodylmd>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default GreenPanel;
