"use client";
import React, { useState } from "react";
import {  Bodylmd } from "@coolsday/polaron-design-system";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import SGHeader from "../typography/SGHeader";
import ArrowUpIcon from "../../../public/svg/ArrowUpIcon";
import ArrowDownIcon from "../../../public/svg/ArrowDownIcon";

const Collapsible = ({
  question,
  answer,
  expanded,
  onToggle,
  isAnyExpanded,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Determine header color
  const headerColor = expanded
    ? "text-olive-green"
    : isAnyExpanded
    ? "text-[#A5AEB4]"
    : "text-olive-green";

  return (
    <div className="relative bg-transparent mt-[16px]">
      <Accordion
        expanded={expanded}
        sx={{
          padding: 0, // 去掉外部的 padding
          margin: "16px 0",
          borderBottom: "1px solid #929292",
          "& .MuiAccordionSummary-root": {
            padding: {
              xs: "16px 0px",
              md: "24px 0px",
            },
            borderRadius: "0px",
            "& .MuiAccordionSummary-content": {
              margin: "0", // 去掉内容的 margin
            },
          },
          "& .MuiAccordionDetails-root": {
            //展开的内容
            boreder: "none",
            padding: {
              xs: "0px 0px 16px 0px ",
              md: "0px 0px 24px 0px",
            },
          },
          boxShadow: "none", // 去掉阴影
          "&.Mui-expanded": {
            boxShadow: "none", // 展开时也去掉阴影
            borderRadius: "0px",
            margin: "16px 0",
            "& .MuiAccordionSummary-root": {
              border: "none", // 展开时的边框
            },
          },
        }}
        className="w-full mt-[16px] bg-[#F9F9FB]"
        onChange={onToggle}
      >
        <AccordionSummary
          className="w-full flex justify-between items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            },
          }}
        >
          <div className="flex-1 overflow-hidden text-ellipsis">
            <SGHeader
              className={`${headerColor} mb-0 text-[22px] md:text-[32px]`}
            >
              {question}
            </SGHeader>
          </div>

          <div className="w-6 h-6 md:w-8 md:h-8 ml-3 shrink-0">
            {expanded ? (
              <ArrowUpIcon color="#00463A" />
            ) : (
              <ArrowDownIcon color="#a5aeb6" />
            )}
          </div>
        </AccordionSummary>

        <AccordionDetails className="w-full">
          <div>
            {typeof answer === "string" ? (
              answer.split("\n").map((text, index) => (
                <React.Fragment key={index}>
                  <Bodylmd className="text-[#121216]">
                    {text
                      .split(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/)
                      .map((part, i) => {
                        if (
                          part.match(
                            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
                          )
                        ) {
                          return (
                            <a
                              key={i}
                              href={`mailto:${part}`}
                              className="text-blue-600 hover:underline"
                            >
                              {part}
                            </a>
                          );
                        }
                        return part;
                      })}
                  </Bodylmd>
                  {index < answer.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))
            ) : (
              <Bodylmd className="text-[#121216]">{answer}</Bodylmd>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapsible;
