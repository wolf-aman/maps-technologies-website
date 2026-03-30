import "@/styles/fonts.css";

interface HeroProps {
  companyName?: string;
  headline?: string;
  tagline?: string;
}

export default function Hero({
  headline = "Innovative Solutions for Diverse Domains",
  tagline = "Advancing Technology for a Better Tomorrow",
}: HeroProps) {
  return (
    <section className="bg-gray-50 pb-2">

      {/* container controlling left/right margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* hero image container */}
        <div className="relative overflow-hidden shadow-lg">

          <div
            className="relative w-full"
            style={{ aspectRatio: "1536 / 780" }}
          >
            {/* hero image */}
            <img
              src="/images/home-background.png"
              alt="MAPS Technologies Industries"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-transparent"></div>

            {/* company name */}
            <div className="absolute top-[6%] left-[4%]">
              <span
                className="text-white/90 tracking-[0.3px] italic"
                style={{ fontFamily: "Segoe UI, sans-serif" }}
              >
                <span className="text-[24px] md:text-[26px] font-bold">MAPS</span>
                <span className="text-[18px] md:text-[20px] font-semibold"> Technologies</span>
              </span>
            </div>

            {/* headline */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center w-[65%]">

              <h1
                className="text-3xl sm:text-4xl md:text-[44px] lg:text-[36px] font-semibold italic text-white mb-4 leading-[1.2] tracking-[0.3px] whitespace-nowrap"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {headline}
              </h1>

              {/* divider */}
              <div className="w-[220px] h-[1px] bg-white/30 mx-auto mb-4"></div>

              {/* tagline */}
              <p
                className="text-[18px] md:text-[20px] italic font-medium text-white/85 text-right"
                style={{ fontFamily: "Segoe UI, sans-serif" }}
              >
                {tagline}
              </p>

            </div>

            {/* bottom labels */}
            <div className="absolute bottom-[5%] left-[4%] right-[4%]">

              <div
                className="flex justify-between text-white text-sm md:text-[18px] font-bold"
                style={{ 
                  fontFamily: "Poppins, sans-serif",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)"
                }}
              >

                <span>Medical Electronic Systems</span>

                <span className="text-center">
                  Vibration / Geophone Systems
                </span>

                <span className="text-right">
                  Metering & Communication Systems
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}