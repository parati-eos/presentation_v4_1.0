// hero.tsx

import React from "react";
import { HeroParallax } from "./hero-parallax.tsx";

export function HeroParallaxDemo() {
  const products = [
    {
      title: "Facebook",
      link: "https://zynth.ai/share?submissionId=Parati-1713502679562",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Facebook%20Team%205.png?raw=true",
    },
    {
      title: "Delhivery",
      link: "https://zynth.ai/share?submissionId=Parati-1713430410967",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Delhivery%20Product%205.png?raw=true",
    },
    {
      title: "Tesla",
      link: "https://zynth.ai/share?submissionId=Parati-1713506221153",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Tesla%20GTM%203.png?raw=true",
    },
    {
       title: "Apple",
      link: "https://zynth.ai/share?submissionId=Parati-1713424380332",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Apple%20Product%206.png?raw=true",
    },
    {
      title: "Nykaa",
      link: "https://zynth.ai/share?submissionId=Parati-1713426656376",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Nykaa%20business%20model%204.png?raw=true",
    },
    {
      title: "Duolingo",
      link: "https://zynth.ai/share?submissionId=Parati-1713521432288",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Duolingo%20Financials%20Use%20of%20Funds.png?raw=true",
    },
    {
       title: "Blinkit",
      link: "https://zynth.ai/share?submissionId=Parati-1713510136883",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Blinkit%20Track%20Record.png?raw=true",
    },
    {
       title: "Open AI",
      link: "https://zynth.ai/share?submissionId=Parati-1713450564562",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Open%20AI%20Problem%205.png?raw=true",
    },
    {
      title: "Paytm",
      link: "https://zynth.ai/share?submissionId=Parati-1713877444343",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Paytm%20Mobile%20App%20screenshots%203.png?raw=true",
    },
    {
      title: "NVIDIA",
      link: "https://zynth.ai/share?submissionId=Parati-1713523086905",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/NVIDIA%20Product%20RoadMap.png?raw=true",
    },
    {
     title: "DailyHunt",
      link: "https://zynth.ai/share?submissionId=Parati-1713511811562",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/DailyHunt%20Solutions%204.png?raw=true",
    },
    {
      title: "Cred",
      link: "https://zynth.ai/share?submissionId=Parati-1713509226838",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Cred%20About%205.png?raw=true",
    },
    {
      title: "Zerodha",
      link: "https://zynth.ai/share?submissionId=Parati-1713873123080",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Zerodha%20GTM%205.png?raw=true",
    },
    {
      title: "Paytm",
      link: "https://zynth.ai/share?submissionId=Parati-1713877444343",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Paytm%20Product%20Architecture.png?raw=true",
    },
    {
     title: "Duolingo",
      link: "https://zynth.ai/share?submissionId=Parati-1713521432288",
      thumbnail:
      "https://github.com/Adarshaparati/Eos-suit/blob/main/Duolingo%20Case%20Study.png?raw=true",
    },


  ];

  return <HeroParallax products={products} />;
}
