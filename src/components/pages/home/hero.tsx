// hero.tsx

import React from "react";
import { HeroParallax } from "./hero-parallax.tsx";

export function HeroParallaxDemo() {
  const products = [
    {
      title: "Facebook Team 5",
      link: "https://zynth.ai/share?submissionId=Parati-1713502679562",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Facebook%20Team%205.png?raw=true",
    },
    {
      title: "Delhivery Product 5",
      link: "https://zynth.ai/share?submissionId=Parati-1713869455595",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Delhivery%20Product%205.png?raw=true",
    },
    {
      title: "Tesla GTM 3",
      link: "https://zynth.ai/share?submissionId=Parati-1713506221153",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Tesla%20GTM%203.png?raw=true",
    },
    {
       title: "Apple Product 6",
      link: "https://zynth.ai/share?submissionId=Parati-17138636195632",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Apple%20Product%206.png?raw=true",
    },
    {
      title: "Nykaa business model 4",
      link: "https://zynth.ai/share?submissionId=Parati-1713866387084",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Nykaa%20business%20model%204.png?raw=true",
    },
    {
      title: "Duolingo Financials Use of Funds",
      link: "https://zynth.ai/share?submissionId=Parati-1713521432288",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Duolingo%20Financials%20Use%20of%20Funds.png?raw=true",
    },
    {
       title: "Blinkit Track Record",
      link: "https://zynth.ai/share?submissionId=Parati-1713510136883",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Blinkit%20Track%20Record.png?raw=true",
    },
    {
      title: "Open AI Problem 5",
     link: "https://zynth.ai/share?submissionId=Parati-1713857759967",
     thumbnail:
       "https://github.com/Adarshaparati/Eos-suit/blob/main/Open%20AI%20Problem%205.png?raw=true",
   },
   {
     title: "Paytm Mobile App Screenshots 3",
     link: "https://zynth.ai/share?submissionId=Parati-1713877444343",
     thumbnail:
       "https://github.com/Adarshaparati/Eos-suit/blob/main/Paytm%20Mobile%20App%20screenshots%203.png?raw=true",
   },
   {
     title: "NVIDIA Product RoadMap",
     link: "https://zynth.ai/share?submissionId=Parati-1713523086905",
     thumbnail:
       "https://github.com/Adarshaparati/Eos-suit/blob/main/NVIDIA%20Product%20RoadMap.png?raw=true",
   },
   {
    title: "DailyHunt Solutions 4",
     link: "https://zynth.ai/share?submissionId=Parati-1713511811562",
     thumbnail:
       "https://github.com/Adarshaparati/Eos-suit/blob/main/DailyHunt%20Solutions%204.png?raw=true",
   },
   {
     title: "Cred About 5",
     link: "https://zynth.ai/share?submissionId=Parati-1713509226838",
     thumbnail:
       "https://github.com/Adarshaparati/Eos-suit/blob/main/Cred%20About%205.png?raw=true",
   },
   {
     title: "Zerodha GTM 5",
     link: "https://zynth.ai/share?submissionId=Parati-1713873123080",
     thumbnail:
       "https://github.com/Adarshaparati/Eos-suit/blob/main/Zerodha%20GTM%205.png?raw=true",
   },
   {
     title: "Paytm Product Architecture",
     link: "https://zynth.ai/share?submissionId=Parati-1713877444343",
     thumbnail:
     "https://github.com/Adarshaparati/Eos-suit/blob/main/Paytm%20Product%20Architecture.png?raw=true",
    },
    {
     title: "Duolingo Case study",
      link: "https://zynth.ai/share?submissionId=Parati-1713521432288",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Duolingo%20Case%20Study.png?raw=true",
    },

  ];

  return <HeroParallax products={products} />;
}
