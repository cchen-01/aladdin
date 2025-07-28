import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import GreenPanel from "@/components/GreenPanel/GreenPanel";
import GreyPanel from "./components/GreyPanel/GreyPanel";
import Nav from "@/components/Nav/Nav";
import Image from "next/image";

export const metadata = {
  title: "Professional Solar Site Surveys | Aladdin SD Ltd",
  description:
    "Ensure solar project success with precision site surveys for homes, businesses, and large-scale solar fields. Book a site inspection today.",
};

const services = [
  {
    title: "Residential",
    imageUrl: "/sitesurvey/site-survey-project-residential.png",
    paragraph:
      "Fast, accurate inspections with national coverage and scheduling software for a smooth customer experience.",
  },
  {
    title: "Commercial",
    imageUrl: "/sitesurvey/site-survey-project-commercial.png",
    paragraph:
      "Precision roof mapping with GPS and aerial surveying—quarter-inch accuracy guaranteed.",
  },
  {
    title: "Ground Mount",
    imageUrl: "/sitesurvey/site-survey-project-ground-mount.png",
    paragraph:
      "Topographical surveys, pile stakeouts, and thermal imaging to support high-performance solar fields.",
  },
];

const items = [
  {
    title: "Expert Support",
    imageUrl: "/svg/expert-support.svg",
    paragraph:
      "Experienced team with extensive knowledge of the solar industry.",
  },
  {
    title: "Advance Data",
    imageUrl: "/svg/advance.svg",
    paragraph:
      "Precise and efficient data collection using advanced technology.",
  },
  {
    title: "Service",
    imageUrl: "/svg/service.svg",
    paragraph:
      "Outstanding customer support throughout every stage of your project.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Banner
        title="Why a Site Survey Matters"
        description="A site survey collects essential data to ensure safe, efficient, and optimized solar installations. We assess roof structure, sunlight exposure, shading, and more for the best performance and design accuracy."
        url="/contact"
        buttontext="Book a Site Survey"
        imageUrl="/sitesurvey/site-survey-banner-image.png"
        bgc="bg-[#112526]"
      />
      <ServiceGrid
        title="Surveys for Projects of Any Size"
        description="From small homes to large commercial installations, we provide detailed site surveys tailored to each project's specific needs."
        items={services}
        imgHasText={false}
        isSiteSurvey={true}
      />
      <div className="relative w-full bg-cover bg-center bg-no-repeat">
        {/* Background image */}
        <div className="absolute inset-0 h-[150px] md:h-[214px]">
          <Image
            src="/Frame 34.png"
            alt=""
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <GreenPanel
            title="Why Choose Aladdin SD Ltd"
            description="Our site surveys combine precision, advanced tools, and expert knowledge to bring your solar vision to life. Contact us today to schedule your survey."
            items={items}
          />
        </div>
      </div>

      <GreyPanel imageUrl="/sitesurvey/site-survey-ideal-site.png" />
      <Footer />
    </>
  );
}
