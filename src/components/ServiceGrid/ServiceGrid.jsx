import Image from "next/image";
import { Section } from "../Section/Section";
import { Bodylmd, Bodylrg } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";
import Link from "next/link";

export default function ServiceGrid({
  title,
  description,
  imgHasText,
  items = [],
  isSiteSurvey,
  isHomePage,
}) {
  const isTwoCol = items.length === 2;
  const isThreeCol = items.length === 3;

  return (
    <Section sectionClassName="!pt-[64px] !pb-[64px] tablet:!pt-[128px] tablet:!pb-[128px] smLaptop:!pt-[128px] smLaptop:!pb-[128px] lglaptop:!pt-[128px] lglaptop:!pb-[128px]">
      {/* Title + Description - placed outside grid */}
      {title && (
        <SGHeader className="mb-6 text-center text-[24px] md:text-[48px]">
          {title}
        </SGHeader>
      )}
      {description && (
        <Bodylmd className="font-inter text-[#808c96] max-w-6xl mx-auto mb-8 md:mb-12 text-center">
          {description}
        </Bodylmd>
      )}
      {/* Card Grid */}
      <div
        className={`grid  ${isTwoCol ? "md:grid-cols-2 gap-12" : ""} ${
          isThreeCol ? "md:grid-cols-3 gap-8" : ""
        }`}
      >
        {items.map((item, index) => {
          const CardContent = (
            <div className="gap-4 lg:gap-8 flex flex-col">
              <div className="overflow-hidden rounded-2xl shadow-md group relative">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  className={`w-full object-cover transition-transform group-hover:scale-105 
          ${isSiteSurvey ? "h-[200px] md:h-full" : "h-full"}`}
                />

                {imgHasText && (
                  <div className="absolute inset-0 bg-black/40 flex items-end py-5 px-4 md:py-10 md:px-8">
                    <div className="text-white font-semibold text-sm md:text-base">
                      <SGHeader className="text-[20px] md:text-[32px]">
                        {item.title}
                      </SGHeader>
                      {item.description && (
                        <Bodylrg className="font-inter mt-[5px] md:mt-8">
                          {item.description}
                        </Bodylrg>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {!imgHasText && (
                <div>
                  <SGHeader className="mb-2 lg:mb-4 text-[20px] md:text-[32px]">
                    {item.title}
                  </SGHeader>
                  <Bodylrg className="text-[#808c96] font-inter">
                    {item.paragraph}
                  </Bodylrg>
                </div>
              )}
            </div>
          );

          return isHomePage ? (
            <Link key={index} href={item?.url}>
              {CardContent}
            </Link>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>
    </Section>
  );
}
