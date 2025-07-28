import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import GreenPanel from "@/components/GreenPanel/GreenPanel";
import ElectricalEngineeringGrid from "./components/ElectricalEngineeringGrid";
import SiteSurveySection from "./components/SiteSurveySection";
import KeyServices from "./components/KeyServices";

export const metadata = {
  title: "Solar Project Management & Engineering | Aladdin SD Ltd",
  description:
    "From site assessments to solar layouts and engineering, we manage every step of your solar project. Get permit-ready packages for residential and commercial installs.",
};

const services = [
  {
    title: "Residential",
    imageUrl: "/solarproject/site-survey-project-residential.jpg",
    description:
      "We assess whether your roof can support solar panels based on location-specific snow, wind, and seismic loads.",
  },
  {
    title: "Commercial",
    imageUrl: "/solarproject/site-survey-project-commercial.png",
    description:
      "We first evaluate how much load your structure can bear, then review the final array design to ensure long-term safety and compliance.s",
  },
];

const items = [
  {
    title: "Panel Layout",
    imageUrl: "/svg/panel.svg",
    paragraph: "Maximize panel placement for efficiency.",
  },
  {
    title: "Shadow Analysis",
    imageUrl: "/svg/shadow.svg",
    paragraph: "Year-round simulation for optimal light exposure.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Banner
        title="End-to-End Solar Project Planning"
        description="Our full-service solar project management includes everything from drone site assessments to complete permit packages. We support contractors and installers with design, structural, and electrical engineering tailored to your specific requirements."
        url="/contact"
        buttontext="Get a Free Quote"
        imageUrl="/solarproject/solar-project-management-banner-image.png"
        bgc="bg-[#112526]"
      />
      <KeyServices />

      <GreenPanel
        title="Optimized Solar Layout Design"
        description="We create accurate roof drawings and panel layouts using drone and 3D modeling. Designs are optimized based on shadow analysis and local building/fire codes."
        items={items}
      />
      <div className="relative w-full bg-cover bg-center bg-no-repeat">
        {/* Background image */}
        <div className="absolute inset-0 h-[84px] md:h-[210px]">
          <Image
            src="/Frame 34.png"
            alt=""
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <ServiceGrid
            title="Structural Engineering Services"
            description="We offer in-house structural engineering services for both residential and commercial projects."
            items={services}
            imgHasText={true}
          />
        </div>
      </div>

      <ElectricalEngineeringGrid />
      <SiteSurveySection />
      <Footer />
    </>
  );
}
