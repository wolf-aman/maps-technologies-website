'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface TimelinePeriod {
year: string;
description: string[];
}

const timelinePeriods: TimelinePeriod[] = [
  {
    year: '1992–1994: Bootstraping',
    description: ['Conveyor Belt Weighing System', 'Roof Stability Tester for Underground Mines'],
  },
  {
    year: '1995–2005: Industrial Expansion',
    description: ['AVR platform for Neonatal Care System', 'Automotive Infotainment System and Energy Metering'],
  },
  {
    year: '2006–2020: Strategic Alliances',
    description: ['With SmartSurgN, USA in Surgical Visualization Technology', 'IEC 60601 Compliance for Medical Products'],
  },
  {
    year: '2021–Present: Technology Hub',
    description: ['Wireless Geophone Network for Landslide and Blast Detection', 'Visualization & Storage Systems for minimal Invasive Surgeries'],
  },
];

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-about.png')"}}
      />

      {/* Soft overlay for readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-white/35 via-white/20 to-white/40 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-8">

        {/* Back Button */}
        <div className="mb-3">
          <button
            onClick={() => router.back()}
            className="flex items-center text-slate-500 hover:text-[#1a2347] font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        {/* Top Header Line */}
        <div className="flex items-center w-full mb-5">
          <div className="h-[1px] bg-slate-300 flex-grow mr-6"></div>
          <div className="text-xl md:text-2xl text-slate-500 font-light tracking-wide whitespace-nowrap">
            <span className="font-semibold text-[#334155]">MAPS</span> Technologies
          </div>
        </div>

        {/* --- About MAPS Section --- */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-[2.5rem] font-semibold text-[#1a2347] mb-2">
            About MAPS
          </h1>

          <div className="w-full h-[1px] bg-slate-300/60 mb-4"></div>

          <div className="flex flex-col md:flex-row gap-0 items-start">

            {/* Left Column */}
            <div className="w-full md:w-[60%] flex flex-col pt-2">

              <p className="text-lg md:text-xl text-[#475569] leading-relaxed mb-6 text-justify">
                MAPS Technologies, born out of academic collaboration at IIT Madras in 1992 and originally known as Sanmarg Union, specializes in embedded systems, medical electronics, and multidisciplinary product development.
              </p>

              {/* Quote Box */}
              <div className="bg-transparent backdrop-blur-sm rounded-xl p-2 md:p-2 flex items-start shadow-sm border border-white/30">

                <span className="text-[#1a2347] text-4xl md:text-4xl font-serif leading-none mr-0 mt-0 opacity-90 flex-shrink-0">
                @
                </span>

                <p className="text-[#475569] text-lg leading-relaxed font-medium text-justify">
                  MAPS, our journey began with a simple belief: complex engineering
                  challenges require a first-time-right approach. We don't just build
                  products; we build strong engineering capabilities.
                </p>

              </div>
            </div>

            {/* Founder Card */}
            <div className="w-full md:w-[30%] flex justify-center md:justify-end">

              <div className="flex flex-col rounded-1xl  shadow-[0_10px_40px_-10px_rgba(0,0,50,0.1)] w-full max-w-[270px] bg-transparent backdrop-blur-sm">

                {/* Image */}
                <div className="relative w-full h-[260px] overflow-hidden">
                  <Image
                    src="/images/founder.png"
                    alt="Dr Mahabir Prasad"
                    fill
                    className="object-cover object-top scale-110"
                    sizes="(max-width: 768px) 110vw, 250px"
                    priority
                  />
                </div>

                {/* Text */}
                <div className="p-2 bg-transparent backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#1a2347]">
                    Dr Mahabir Prasad
                  </h3>

                  <p className="text-slate-600 text-xs mt-0 font-medium">
                    Founder & CTO
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* --- Our Journey Section --- */}
        <div>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-[#1a2347] mb-2">
            Our Journey
          </h2>

          <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/30">
            <div className="flex flex-col md:flex-row w-full gap-y-5 md:gap-y-0">

              {timelinePeriods.map((period, index) => (
                <div
                  key={`content-${index}`}
                  className="flex-1 text-left md:border-r border-slate-300/60 last:border-0 px-3 lg:px-4"
                >

                  <div className="text-[#203a85] text-sm md:text-base font-semibold tracking-wide mb-4 whitespace-nowrap">
                    {period.year}
                  </div>

                  <ul className="text-slate-600 text-xs md:text-sm leading-relaxed list-disc ml-4 space-y-2">
                    {period.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
