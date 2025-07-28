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
      className={`border bg-transparent px-6 py-4 rounded-full transition ${
        white
          ? "border-white hover:bg-white"
          : "border-[#112526] hover:bg-[#112526]"
      } ${className}`}
      {...props}
    >
      {white ? (
        <Bodylsb className="font-inter text-white hover:text-black">{children}</Bodylsb>
      ) : (
        <Bodylsb className="font-inter text-[#112526] hover:text-white">
          {children}
        </Bodylsb>
      )}
    </Link>
  );
}
