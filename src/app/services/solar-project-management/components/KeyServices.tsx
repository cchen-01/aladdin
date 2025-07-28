"use client";
import * as React from "react";
import { Section } from "@/components/Section/Section";
import SGHeader from "@/components/typography/SGHeader";
import Collapsible from "@/components/Collapsible/Collapsible";
import imgSrc1 from "../../../../../public/solarproject/solar-project-management-key-service-1.png";
import imgSrc2 from "../../../../../public/solarproject/solar-project-management-key-service-2.png";
import imgSrc3 from "../../../../../public/solarproject/solar-project-management-key-service-3.png";
import imgSrc4 from "../../../../../public/solarproject/solar-project-management-key-service-4.png";
import imgSrc5 from "../../../../../public/solarproject/solar-project-management-key-service-5.png";

const images = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5];

function KeyServices({ title, description, items = [] }) {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const collapsibleData = [
    {
      question: "Site Survey Timeline Planning",
      answer:
        "Our experts understand every phase of the solar installation process. We provide a detailed and realistic timeline to help streamline your project, reduce delays, and keep everything on track.",
    },
    {
      question: "Solar Layout Design",
      answer:
        "We create a customized solar system layout based on your property’s orientation, shading, and roof performance, ensuring optimal panel placement and energy production.",
    },
    {
      question: "Structural and Electrical Engineering",
      answer:
        "Our in-house engineers deliver permit-ready structural and electrical packages tailored to your project. We assess load capacity, roof integrity, and electrical requirements to ensure safety, efficiency, and full code compliance.",
    },
    {
      question: "Drone-Based Site Analysis",
      answer:
        "Using aerial drones and 3D modeling technology, we capture precise top-view data of your site. This allows us to identify obstacles, assess shading, and design with accuracy, leaving no detail overlooked.",
    },
    {
      question: "Permit Application Submission",
      answer:
        "We take the hassle out of permitting. Our team prepares all necessary documentation and submits permit applications on your behalf to ensure compliance and faster approvals.",
    },
  ];

  return (
    <Section
      contentClassName=""
      sectionClassName="!pt-12 !pb-12 smLaptop:!pt-16 smLaptop:!pb-32 lglaptop:!pt-16 lglaptop:!pb-32"
    >
      <SGHeader className="mb-6 md:mb-16 text-black text-[28px] md:text-[48px] text-center">
        Key Services
      </SGHeader>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-[100%] md:w-[50%]">
          {collapsibleData.map((item, idx) => (
            <Collapsible
              key={idx}
              question={item.question}
              answer={item.answer}
              expanded={expandedIndex === idx}
              onToggle={() =>
                setExpandedIndex(expandedIndex === idx ? null : idx)
              }
              isAnyExpanded={expandedIndex !== null}
            />
          ))}
        </div>

        <div className="w-full md:w-[45%]">
          <img
            src={images[expandedIndex ?? 0].src}
            alt="Image of solar project management"
            className="rounded-lg w-full h-[206px] md:w-[700px] md:h-auto object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export default KeyServices;
