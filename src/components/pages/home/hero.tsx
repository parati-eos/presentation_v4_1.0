// hero.tsx

import React from "react";
import { HeroParallax } from "./hero-parallax.tsx";

export function HeroParallaxDemo() {
  const products = [
    {
      title: "Open AI",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713450564562",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Open%20AI%20Problem%205.png?raw=true",
    },
    {
      title: "Apple",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713424380332",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Apple%20Product%206.png?raw=true",
    },
    {
      title: "Nykaa",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713426656376",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Nykaa%20business%20model%204.png?raw=true",
    },
    {
      title: "Delhivery",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713430410967",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Delhivery%20Product%205.png?raw=true",
    },
    {
      title: "Zerodha",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713532287932",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Zerodha%20GTM%205.png?raw=true",
    },
    {
      title: "Paytm",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713526436129",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Paytm%20Mobile%20App%20screenshots%203.png?raw=true",
    },
    {
      title: "Cred",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713509226838",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Cred%20About%205.png?raw=true",
    },
    {
      title: "Facebook",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713502679562",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Facebook%20Team%205.png?raw=true",
    },
    {
      title: "Paytm",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713526436129",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/Paytm%20Product%20Architecture.png?raw=true",
    },
    {
      title: "NVIDIA",
      link: "https://presentation-final-fd.vercel.app/share?submissionId=Parati-1713523086905",
      thumbnail:
        "https://github.com/Adarshaparati/Eos-suit/blob/main/NVIDIA%20Product%20RoadMap.png?raw=true",
    },

  ];

  return <HeroParallax products={products} />;
}
