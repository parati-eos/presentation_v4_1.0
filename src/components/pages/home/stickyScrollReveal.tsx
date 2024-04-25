"use client";
import React from "react";
import { StickyScroll } from "../home/sticky-scroll-reveal.tsx";
// import Image from "next/image";

const content = [
  {
    title: "Fill up a questionnaire \n around your business",
    description:
      "Provide detailed information around different aspects of your business to get the best possible version of your pitch deck.",
    content: (
      <div className="w-full  flex items-center justify-center ">
        <img
        className="object-fill"
          src="https://github.com/Adarshaparati/Eos-suit/blob/main/Zynth%20Native%20%20Form%20(V.02).gif?raw=true"
          alt="Cred About 5"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ),
  },
  {
    title: "Let AI do its magic to craft a custom, branded pitch deck for you",
    description:
      "Built on proven frameworks, with AI-generated content and design, while staying completely on-brand.",
    content: (
      <div className="w-full  flex items-center justify-center ">
        <img
        className="object-fill"
          src="https://github.com/Adarshaparati/Eos-suit/blob/main/Zynth%20Native%20%20Form%20(V.02).gif?raw=true"
          alt="Cred About 5"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ),
  },
  {
    title: "Share your presentation as a webpage with investors",
    description:
      "Pitch decks generated on shareable web links which can be directly opened browser and exported to make edits offline.",
    content: (
      <div className="w-full  flex items-center justify-center ">
        <img
        className="object-fill"
          src="https://github.com/Adarshaparati/Eos-suit/blob/main/Zynth%20Native%20%20Form%20(V.02).gif?raw=true"
          alt="Cred About 5"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ),
  }
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
