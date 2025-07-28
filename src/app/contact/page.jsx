"use client";
import { useState } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { Section } from "@/components/Section/Section";
import SGHeader from "@/components/typography/SGHeader";
import { Bodyxlmd } from "@coolsday/polaron-design-system";
import React from "react";
import Image from "next/image";
import Form from "./form";

export default function Home() {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const imgUrls = [
    "/svg/solar_gift-linear.svg",
    "/svg/mingcute_celebrate-line.svg",
    "/svg/lucide_bottle-wine.svg",
  ];

  return (
    <>
      <Nav isContact={true} />
      <div className="relative w-full min-h-[600px] overflow-visible">
        <Image
          src="/Ellipse 1.png"
          alt=""
          width={500}
          height={500}
          className="absolute top-0 left-[-40px] md:top-[-70px] md:left-[-40px] z-0"
        />
        <Image
          src="/Ellipse 2.png"
          alt=""
          width={250}
          height={200}
          className="absolute top-[20px] left-0 md:top-[-80px] md:left-[-30px] z-0"
        />

        <Section
          sectionClassName="!pt-[150px] !pb-[150px] tablet:!pt-[150px] tablet:!pb-[150px] smLaptop:!pt-[230px] smLaptop:!pb-[128px] lglaptop:!pt-[230px] lglaptop:!pb-[128px]"
          contentClassName="flex flex-col md:flex-row items-center justify-between relative z-10"
        >
          {/* Left side: Text content */}
          <div className="flex flex-col justify-center items-start w-full md:w-[47%] text-black">
            <SGHeader className="mb-6 md:mb-12 text-[#112526] text-[28px] md:text-[62px]">
              Contact Us
            </SGHeader>
            <Bodyxlmd className="font-inter leading-relaxed">
              We're here to help with your solar project. Fill out the form
              below, and a member of our team will be in touch shortly.
            </Bodyxlmd>
          </div>

          {/* Right side: Contact form */}
          <div className="mt-8 md:mt-0 relative w-full md:w-[39%] bg-olive-green p-8 rounded-2xl shadow-lg z-10">
            {!submissionSuccess ? (
              <>
                <SGHeader className="mb-6 md:mb-8 text-white text-[24px] md:text-[36x]">
                  Leave us the Message
                </SGHeader>
                <Form setSubmissionSuccess={setSubmissionSuccess} />
              </>
            ) : (
              <div className="text-center w-full h-full">
                <SGHeader className="mb-[120px] md:mb-[160px] text-white text-[24px] md:text-[36px]">
                  Thank you for reaching out!
                </SGHeader>
                <div className="px-[30px] md:px-0 flex flex-row gap-[34px] md:gap-[60px] mb-8 justify-between">
                  {imgUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt=""
                      width={128}
                      height={128}
                      className="w-[48px] h-[48px] md:w-[128px] md:h-[128px] min-w-[48px]"
                    />
                  ))}
                </div>
                <Bodyxlmd className="text-white font-inter mb-[160px]">
                  Our team will contact you shortly to assist with your solar
                  project.
                </Bodyxlmd>
              </div>
            )}
          </div>
        </Section>
      </div>

      <Footer />
    </>
  );
}
