import Nav from "@/components/Nav/Nav";
import Banner from "@/components/Banner/Banner";

import Footer from "@/components/Footer/Footer";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";

export const metadata = {
  title: "Solar Engineering & Site Survey Services | Aladdin SD Ltd",
  description:
    "Get expert solar site surveys, engineering, and permit-ready designs for residential and commercial projects. Call now to streamline your solar installation process.",
};

const services = [
  {
    title: "Commercial & Residential Site Surveys",
    imageUrl: "/home/homepage-site-survey.png",
    url: "/services/sitesurvey",
  },
  {
    title: "One-Stop Solar Project Management",
    imageUrl: "/home/homepage-project-management.png",
    url: "/services/solar-project-management",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Banner
        title="Trusted Experts in Solar Engineering"
        description="Comprehensive site surveys, engineering, and design solutions for solar projects of all sizes—commercial or residential."
        url="/contact"
        imageUrl="/home/homepage-banner-image.png"
        buttontext="Request a Quote"
        bgc="bg-olive-green"
      />
      <ServiceGrid
        title="Permit-Ready Solar Project Design"
        description="Aladdin SD Ltd delivers accurate, compliant, and streamlined solar engineering solutions. From on-site surveys to permit-ready packages, we handle every detail using advanced technology to simplify your project."
        items={services}
        imgHasText={true}
        isHomePage={true}
      />
      <Footer />
    </>
  );
}
