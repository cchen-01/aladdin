"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../Button/Button"; // Import the reusable Button
import { Section } from "../../Section/Section";
import { Bodyssb, Bodylsb } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";
import ArrowUpIcon from "../../../../public/svg/ArrowUpIcon";
import ArrowDownIcon from "../../../../public/svg/ArrowDownIcon";

export default function NavDestop({ isContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50`}>
        {!isScrolled && (
          <div className="w-full bg-[#EDEDED] flex justify-center py-4 overflow-x-auto scrollbar-hide scroll-smooth">
            <Bodylsb className="text-gray-800 text-center whitespace-nowrap">
              📞 Call now to discuss your solar project needs: +1 (902) 448-7787
            </Bodylsb>
          </div>
        )}

        <div
          className={`${
            isScrolled
              ? "bg-white shadow-md"
              : isContact
              ? "bg-white/10"
              : "bg-transparent"
          } transition-all duration-300`}
        >
          <Section
            contentClassName={`mx-auto flex items-center justify-between`}
          >
            {/* Logo */}
            <Link href="/">
              {isScrolled || isContact ? (
                <img
                  src="/logo-black.svg"
                  alt="Logo"
                  className="w-[120px] h-[32px] sm:w-[180px] sm:h-[48px] cursor-pointer"
                />
              ) : (
                <img
                  src="/logo-white.svg"
                  alt="Logo"
                  className="w-[120px] h-[32px] sm:w-[180px] sm:h-[48px] cursor-pointer"
                />
              )}
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex gap-12 text-[24px] font-bold items-center">
              {/* Home */}
              <Link href="/">
                <SGHeader
                  className={`${isScrolled || isContact ? "" : "text-white"}`}
                >
                  Home
                </SGHeader>
              </Link>
              {/* Service */}
              <div className="relative group flex items-center">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className={`${
                    isScrolled || isContact ? "" : "text-white"
                  } flex items-center gap-1`}
                >
                  <SGHeader
                    className={`${
                      isScrolled || isContact ? "" : "text-white"
                    } text-black text-[24px]`}
                  >
                    Services
                  </SGHeader>
                  <div className="w-[32px] h-[32px] shrink-0 ml-2">
                    {isDropdownOpen ? (
                      <ArrowUpIcon
                        color={`${isScrolled || isContact ? "black" : "white"}`}
                      />
                    ) : (
                      <ArrowDownIcon
                        color={`${isScrolled || isContact ? "black" : "white"}`}
                      />
                    )}
                  </div>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full mt-8 w-[380px] h-auto bg-white rounded-md p-4 flex flex-col gap-5"
                    style={{ boxShadow: "0 2px 10px rgba(38, 39, 44, 0.1)" }}
                  >
                    <Link
                      href="/services/sitesurvey"
                      className="flex items-start gap-5 p-2 hover:bg-gray-100"
                    >
                      <img
                        src="/svg/file.svg"
                        alt="Site Survey"
                        className="w-10 h-10"
                      />
                      <div>
                        <SGHeader className="text-black text-[20px] mb-3">
                          Site Survey
                        </SGHeader>
                        <Bodyssb className="text-[#6e7c87]">
                          Ensure safe, efficient, and optimized solar
                          installations
                        </Bodyssb>
                      </div>
                    </Link>
                    <Link
                      href="/services/solar-project-management"
                      className="flex items-start gap-5 p-2 hover:bg-gray-100"
                    >
                      <img src="/svg/sun.svg" alt="" className="w-10 h-10" />
                      <div>
                        <SGHeader className="text-black text-[20px] mb-3">
                          Solar Project Management
                        </SGHeader>
                        <Bodyssb className="text-[#6e7c87]">
                          Full-service solar project management from site
                          assessments to permit packages
                        </Bodyssb>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {/* About */}
              <Link href="/about">
                <SGHeader
                  className={`${isScrolled || isContact ? "" : "text-white"}`}
                >
                  About
                </SGHeader>
              </Link>
            </nav>

            {/* Reusable Button */}
            <Button
              href="/contact"
              white={isScrolled || isContact ? false : true}
            >
              Contact Us
            </Button>
          </Section>
        </div>
      </header>
    </>
  );
}
