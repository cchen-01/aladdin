"use client";
import * as React from "react";
import SGHeader from "@/components/typography/SGHeader";

import Button from "../Button/Button";
import { Section } from "../Section/Section";
import { Bodymmd } from "@coolsday/polaron-design-system";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-dark-olive rounded-t-[48px]">
      <Section
        contentClassName="flex flex-col gap-4 md:gap-10"
        sectionClassName="!pt-[64px] !pb-[64px] tablet:!pt-[128px] tablet:!pb-[128px] smLaptop:!pt-[128px] smLaptop:!pb-[128px] lglaptop:!pt-[128px] lglaptop:!pb-[128px]"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-white">
          {/* Logo + Address */}
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <img
              src="/logo-white.svg"
              alt="Logo"
              className="w-[120px] h-[32px] sm:w-[180px] sm:h-[48px] cursor-pointer"
            />
            <Bodymmd className="leading-6 border-l border-white pl-6">
              8317 St Margarets Bay Rd,
              <br />
              Black Point, NS, B0J 1B0
            </Bodymmd>
          </div>

          {/* Contact Button */}
          <Button
            onClick={() => {
              window.location.href = "/contact";
            }}
            white={true}
            className="hidden md:block"
          >
            Contact Us
          </Button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-400 w-full mb-4 md:mb-2" />

        {/* Info Sections */}
        <div className="w-full md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-8 text-white text-base">
          {/* About + Contact (mobile only) */}
          <div className="space-y-8 md:space-y-0 md:block">
            {/* About (always shown) */}
            <div>
              <SGHeader className="text-[16px] md:text-2xl mb-6 md:mb-8 text-white">
                About
              </SGHeader>

              <ul className="space-y-1">
                <li className="mb-4 md:mb-6">
                  <Link href="/about">
                    <Bodymmd>Our Company</Bodymmd>
                  </Link>
                </li>
                <Link href="/contact">
                  <li>
                    <Bodymmd>Contact Us</Bodymmd>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Contact (mobile only) */}
            <div className="md:hidden">
              <SGHeader className="text-[16px] mb-6 md:mb-8 text-white">
                Contact
              </SGHeader>
              <ul className="space-y-1">
                <li className="mb-4 md:mb-6">
                  <Bodymmd>polaronaladdin@gmail.com</Bodymmd>
                </li>
                <li>
                  <Bodymmd>+1 (902) 448-7787</Bodymmd>
                </li>
              </ul>
            </div>
          </div>

          {/* Service (always shown) */}
          <div>
            <SGHeader className="text-[16px] md:text-2xl mb-6 md:mb-8 text-white">
              Service
            </SGHeader>
            <ul className="space-y-1">
              <Link href="/services/sitesurvey">
                <li className="mb-4 md:mb-6">
                  <Bodymmd>Site Surveys</Bodymmd>
                </li>
              </Link>
              <Link href="/services/solar-project-management">
                <li>
                  <Bodymmd>Solar Project Management</Bodymmd>
                </li>
              </Link>
            </ul>
          </div>

          {/* Contact (desktop only) */}
          <div className="hidden md:block">
            <SGHeader className="text-2xl font-bold mb-8 text-white">
              Contact
            </SGHeader>
            <ul className="space-y-1">
              <li className="mb-6">
                <Bodymmd>polaronaladdin@gmail.com</Bodymmd>
              </li>
              <li>
                <Bodymmd>+1 (902) 448-7787</Bodymmd>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Contact Button */}
        <div className="md:hidden flex justify-start mt-4">
          <Button
            onClick={() => {
              window.location.href = "/contact";
            }}
            white={true}
            className="w-auto"
          >
            Contact Us
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
