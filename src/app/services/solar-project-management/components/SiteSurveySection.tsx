"use client";
import { Section } from "@/components/Section/Section";
import Image from "next/image";
import { Bodylmd } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";
import Button from "@/components/Button/Button";

export default function SiteSurveySection() {
  const features = [
    {
      icon: "/svg/lsicon_map-location-outline.svg",
      title: "On-Site Inspections",
      description: "Tailored structural and electrical reports.",
    },
    {
      icon: "/svg/solar_map-linear.svg",
      title: "Drone Roof Mapping",
      description: "Accurate 3D layouts based on real-world conditions.",
    },
    {
      icon: "/svg/hugeicons_package.svg",
      title: "Compliant Packages",
      description: "Optimized and code-ready for permit approvals.",
    },
  ];

  return (
    <Section sectionClassName="!pt-[64px] !pb-[64px] tablet:!pt-[64px] tablet:!pb-[64px] smLaptop:!pt-[128px] smLaptop:!pb-[128px] lglaptop:!pt-[128px] lglaptop:!pb-[128px]">
      <div className="flex flex-col md:flex-row gap-[114px] ">
        {/* Destop image */}
        <div className="hidden md:flex w-full md:w-[42%] h-full flex-col gap-6">
          <div className="aspect-square rounded-xl overflow-hidden w-full relative">
            <Image
              src="/solarproject/solar-project-management-integrated-site-survey.png"
              alt="Ideal Site for Solar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="md:w-1/2">
          <SGHeader className="mb-5 md:mb-8 text-[24px] md:text-[48px] text-[#26272c]">
            Integrated Site Survey with Engineering Analysis
          </SGHeader>
          <div className="flex mb-8 md:mb-16">
            <Button
              onClick={() => {
                window.location.href = "/contact";
              }}
              white={false}
              className="self-start px-4 py-2 sm:self-auto w-auto"
            >
              Act Now
            </Button>
          </div>

          {/* Mobile img only */}
          <div className="my-8 md:hidden w-full first-letter:h-full flex-col gap-6">
            <div className="aspect-square rounded-xl overflow-hidden w-full relative">
              <Image
                src="/solarproject/solar-project-management-integrated-site-survey.png"
                alt="Ideal Site for Solar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4">
                <div className="flex flex-row items-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="w-[20px] h-[20px] min-w-[20px] mr-4 md:w-[40px] md:h-[40px] md:min-w-[40px]"
                  />
                  <SGHeader className="text-[16px] md:text-[24px]">
                    {feature.title}
                  </SGHeader>
                </div>
                <Bodylmd className="text-[#647c87]">
                  {feature.description}
                </Bodylmd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
