import { Section } from "@/components/Section/Section";
import { Bodylmd, Bodylrg } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";

export default function ElectricalEngineeringGrid({ items }) {
  const engineeringItems = [
    {
      imageUrl: "/svg/diagram.svg",
      title: "Single-Line Diagrams",
      paragraph: "Clear electrical schematics for permitting.",
    },
    {
      imageUrl: "/svg/system.svg",
      title: "System Optimization",
      paragraph: "Maximize energy output",
    },
    {
      imageUrl: "/svg/analysis.svg",
      title: "Performance Analysis",
      paragraph: "Post-installation checks to ensure efficiency",
    },
    {
      imageUrl: "/svg/terminal.svg",
      title: "Engineer-Stamped Designs",
      paragraph: "PE certification ensures code compliance and reliability",
    },
  ];

  return (
    <div className="bg-[#f5f5f7]">
      <Section sectionClassName="!pt-[64px] !pb-[64px] tablet:!pt-[128px] tablet:!pb-[128px] smLaptop:!pt-[128px] smLaptop:!pb-[128px] lglaptop:!pt-[128px] lglaptop:!pb-[128px]">
        <SGHeader className="mb-8 md:mb-12 text-[24px] md:text-[48px] text-[#00463A]">
          Electrical Engineering Excellence
        </SGHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
          {engineeringItems.map((item, index) => (
            <div
              key={index}
              className="bg-white py-3 px-4 md:py-6 md:px-8 rounded-xl shadow-sm flex flex-col items-start gap-4"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-10 h-10 md:w-12 md:h-12 mb-8 md:mb-[74px]"
              />

              <SGHeader className="text-[16px] md:text-[24px] text-[#26272c]">
                {item.title}
              </SGHeader>
              <Bodylmd className="text-[#647c87]">{item.paragraph}</Bodylmd>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
