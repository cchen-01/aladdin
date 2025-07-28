import Nav from "@/components/Nav/Nav";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import { Section } from "@/components/Section/Section";
import SGHeader from "@/components/typography/SGHeader";
import { Bodyxlmd } from "@coolsday/polaron-design-system";
export const metadata = {
  title: "About Aladdin SD Ltd | Solar Engineering Experts in Alberta",
  description:
    "Learn more about Aladdin SD Ltd—Alberta’s trusted solar engineering company offering site surveys, permit packages, and expert project support.",
};
export default function Home() {
  return (
    <>
      <Nav />
      <Banner
        title="About Aladdin SD Ltd"
        description="Based in Alberta, Aladdin SD Ltd is a professional engineering firm focused on delivering solar design and survey solutions. We use advanced drone technology and innovative methods to provide safe, accurate, and fast results."
        url="/contact"
        imageUrl="/about/about-banner-image.png"
        buttontext="Request a Quote"
        bgc="bg-olive-green"
        isAboutPage={true}
      />
      <Section
        contentClassName="space-y-[128px]"
        sectionClassName="!pt-[64px] !pb-[64px] tablet:!pt-[128px] tablet:!pb-[128px] smLaptop:!pt-[128px] smLaptop:!pb-[128px] lglaptop:!pt-[128px] lglaptop:!pb-[128px]"
      >
        {/* Section 1: Our Vision */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
          {/* Text */}
          <div className="text-left w-full md:w-[42%]">
            <SGHeader className="mb-6 md:mb-16 text-[24px] md:text-[48px]">
              Our Vision
            </SGHeader>
            <Bodyxlmd className="font-inter text-[#647c87]">
              Empowering individuals and businesses to combat climate change
              through clean energy engineering.
            </Bodyxlmd>
          </div>
          {/* Image */}
          <div className="flex-1">
            <img
              src="/about/about-our-vision.png"
              alt="Vision"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Section 2: Goal */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-16">
          {/* Text */}
          <div className="text-left w-full md:w-[42%]">
            <SGHeader className="mb-6 md:mb-16 text-[24px] md:text-[48px]">
              Goal
            </SGHeader>
            <Bodyxlmd className="font-inter text-[#647c87]">
              To streamline the solar installation process with fast, accurate,
              and permit-ready engineering solutions for every project.
            </Bodyxlmd>
          </div>
          {/* Image */}
          <div className="flex-1">
            <img
              src="/about/about-goal.png"
              alt="Goal"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
