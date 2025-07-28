"use client";
import Link from "next/link";
import { Bodylsb } from "@coolsday/polaron-design-system";

export default function Button({
  href = "#",
  children,
  outline = true,
  white = false,
  className = "",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`group border px-6 py-4 rounded-full transition duration-200 ease-in-out ${
        white
          ? "border-white bg-transparent hover:bg-white"
          : "border-[#112526] bg-transparent hover:bg-[#112526]"
      } ${className}`}
      {...props}
    >
      <Bodylsb
        className={`font-inter transition-colors duration-200 ${
          white
            ? "text-white group-hover:text-black"
            : "text-[#112526] group-hover:text-white"
        }`}
      >
        {children}
      </Bodylsb>
    </Link>
  );
}
