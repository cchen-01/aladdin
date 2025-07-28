"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Bodysmd, Bodylsb } from "@coolsday/polaron-design-system";
import SGHeader from "@/components/typography/SGHeader";
import ArrowUpIcon from "../../../../public/svg/ArrowUpIcon";
import ArrowDownIcon from "../../../../public/svg/ArrowDownIcon";

export default function NavMobile({ isContact }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 `}>
      {!isScrolled && (
        <div className="w-full bg-[#EDEDED] py-2 overflow-hidden">
          <div className="marquee whitespace-nowrap">
            <Bodylsb className="whitespace-nowrap inline-block px-4">
              📞 Call now to discuss your solar project needs: +1 (902) 448-7787
            </Bodylsb>
          </div>
        </div>
      )}

      <div
        className={`transition-colors duration-300 ${
          isScrolled ? "bg-white" : isContact ? "bg-white/10" : "bg-transparent"
        } flex flex-row justify-between items-center px-4 py-2 `}
      >
        <Link href="/">
          {isScrolled || isContact ? (
            <img
              src="/logo-black.svg"
              alt="Logo"
              className="w-[90px] h-[24px] sm:w-[180px] sm:h-[48px] cursor-pointer"
            />
          ) : (
            <img
              src="/logo-white.svg"
              alt="Logo"
              className="w-[90px] h-[24px] sm:w-[180px] sm:h-[48px] cursor-pointer"
            />
          )}
        </Link>

        {/* Hamburger menu button */}
        <button
          className="block cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <Image
            src={isScrolled || isContact ? "/menu.svg" : "/menu-white.svg"}
            alt="Hamburger Menu"
            width={24}
            height={24}
          />
        </button>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-white  z-20"
              onClick={() => setDrawerOpen(false)}
            ></div>
            {/* Drawer */}
            <div className="fixed top-0 right-0 w-full h-full bg-blue1 shadow-lg z-30 p-2 flex flex-col">
              {/* close icon */}
              <button
                className="cursor-pointer absolute top-3 right-3"
                onClick={() => setDrawerOpen(false)}
              >
                <Image
                  src="/close.svg"
                  alt="Close Menu"
                  width={24}
                  height={24}
                />
              </button>

              {/* services */}
              <div className="mt-[76px] gap-6 flex flex-col">
                <Link href="/">
                  <SGHeader className="text-black text-[16px]">Home</SGHeader>
                </Link>
                <div className="mb-2">
                  <button
                    className="w-full flex justify-between gap-2 items-center text-black font-bold cursor-pointer"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <SGHeader className="text-black text-[16px]">
                      Services
                    </SGHeader>
                    <div className="w-[24px] h-[24px] shrink-0">
                      {isDropdownOpen ? (
                        <ArrowUpIcon color="black" />
                      ) : (
                        <ArrowDownIcon color="black" />
                      )}
                    </div>
                  </button>
                  {isDropdownOpen && (
                    <div className="flex flex-col bg-[#f4f4f6] p-2 rounded-sm">
                      <Link
                        href="/services/sitesurvey"
                        className="flex py-1 text-black"
                      >
                        <div className="w-[24px] h-[24px] shrink-0 mr-2">
                          <img
                            src="/svg/file.svg"
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <SGHeader className="text-black text-[13px] mb-3">
                            Site Survey
                          </SGHeader>
                          <Bodysmd className="text-[#6e7c87]">
                            Ensure safe, efficient, and optimized solar
                            installations
                          </Bodysmd>
                        </div>
                      </Link>
                      <Link
                        href="/services/solar-project-management"
                        className="flex py-1 text-black"
                      >
                        <div className="w-[24px] h-[24px] shrink-0 mr-2">
                          <img
                            src="/svg/sun.svg"
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <SGHeader className="text-black text-[13px] mb-2">
                            Solar Project Management
                          </SGHeader>
                          <Bodysmd className="text-[#6e7c87]">
                            Full-service solar project management from site
                            assessments to permit packages
                          </Bodysmd>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                <Link href="/about" className="block mb-2 text-black">
                  <SGHeader className="text-black text-[16px]">
                    About Us
                  </SGHeader>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
